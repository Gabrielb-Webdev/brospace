<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];
$db = getDB();
$pathParts = explode('/', trim($_SERVER['PATH_INFO'] ?? '', '/'));
$projectId = $pathParts[0] ?? null;

switch ($method) {
    case 'GET': // Get all projects or single project
        if ($projectId) {
            // Get single project with assignments
            $stmt = $db->prepare("
                SELECT p.*, 
                    GROUP_CONCAT(DISTINCT pa.user_id) as assigned_to
                FROM projects p
                LEFT JOIN project_assignments pa ON p.id = pa.project_id
                WHERE p.id = ?
                GROUP BY p.id
            ");
            $stmt->execute([$projectId]);
            $project = $stmt->fetch();
            
            if (!$project) {
                sendResponse(['error' => 'Project not found'], 404);
            }
            
            $project['assignedTo'] = $project['assigned_to'] ? explode(',', $project['assigned_to']) : [];
            unset($project['assigned_to']);
            $project = formatProject($project);
            
            sendResponse($project);
        } else {
            // Get all projects
            $stmt = $db->query("
                SELECT p.*, 
                    GROUP_CONCAT(DISTINCT pa.user_id) as assigned_to
                FROM projects p
                LEFT JOIN project_assignments pa ON p.id = pa.project_id
                GROUP BY p.id
                ORDER BY p.created_at DESC
            ");
            $projects = $stmt->fetchAll();
            
            foreach ($projects as &$project) {
                $project['assignedTo'] = $project['assigned_to'] ? explode(',', $project['assigned_to']) : [];
                unset($project['assigned_to']);
                $project = formatProject($project);
            }
            
            sendResponse($projects);
        }
        break;
        
    case 'POST': // Create new project
        $data = getRequestBody();
        
        $id = guidv4();
        $shareToken = guidv4();
        
        $stmt = $db->prepare("
            INSERT INTO projects (id, name, description, client_name, client_email, client_phone, status, created_by, share_token)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ");
        
        $stmt->execute([
            $id,
            $data['name'],
            $data['description'] ?? null,
            $data['clientName'],
            $data['clientEmail'],
            $data['clientPhone'] ?? null,
            $data['status'] ?? 'lead',
            $data['createdBy'],
            $shareToken
        ]);
        
        // Add assignments
        if (!empty($data['assignedTo'])) {
            $assignStmt = $db->prepare("INSERT INTO project_assignments (project_id, user_id) VALUES (?, ?)");
            foreach ($data['assignedTo'] as $userId) {
                $assignStmt->execute([$id, $userId]);
            }
        }
        
        // Get created project
        $stmt = $db->prepare("SELECT * FROM projects WHERE id = ?");
        $stmt->execute([$id]);
        $project = $stmt->fetch();
        $project['assignedTo'] = $data['assignedTo'] ?? [];
        $project = formatProject($project);
        
        sendResponse($project, 201);
        break;
        
    case 'PUT': // Update project
        if (!$projectId) {
            sendResponse(['error' => 'Project ID required'], 400);
        }
        
        $data = getRequestBody();
        
        $fields = [];
        $values = [];
        
        if (isset($data['name'])) { $fields[] = 'name = ?'; $values[] = $data['name']; }
        if (isset($data['description'])) { $fields[] = 'description = ?'; $values[] = $data['description']; }
        if (isset($data['clientName'])) { $fields[] = 'client_name = ?'; $values[] = $data['clientName']; }
        if (isset($data['clientEmail'])) { $fields[] = 'client_email = ?'; $values[] = $data['clientEmail']; }
        if (isset($data['clientPhone'])) { $fields[] = 'client_phone = ?'; $values[] = $data['clientPhone']; }
        if (isset($data['status'])) { $fields[] = 'status = ?'; $values[] = $data['status']; }
        
        if (!empty($fields)) {
            $values[] = $projectId;
            $stmt = $db->prepare("UPDATE projects SET " . implode(', ', $fields) . " WHERE id = ?");
            $stmt->execute($values);
        }
        
        // Update assignments
        if (isset($data['assignedTo'])) {
            $db->prepare("DELETE FROM project_assignments WHERE project_id = ?")->execute([$projectId]);
            
            if (!empty($data['assignedTo'])) {
                $assignStmt = $db->prepare("INSERT INTO project_assignments (project_id, user_id) VALUES (?, ?)");
                foreach ($data['assignedTo'] as $userId) {
                    $assignStmt->execute([$projectId, $userId]);
                }
            }
        }
        
        sendResponse(['success' => true]);
        break;
        
    case 'DELETE': // Delete project
        if (!$projectId) {
            sendResponse(['error' => 'Project ID required'], 400);
        }
        
        $stmt = $db->prepare("DELETE FROM projects WHERE id = ?");
        $stmt->execute([$projectId]);
        
        sendResponse(['success' => true]);
        break;
        
    default:
        sendResponse(['error' => 'Method not allowed'], 405);
}

function formatProject($project) {
    $project['clientName'] = $project['client_name'];
    $project['clientEmail'] = $project['client_email'];
    $project['clientPhone'] = $project['client_phone'];
    $project['createdBy'] = $project['created_by'];
    $project['shareToken'] = $project['share_token'];
    $project['customFields'] = $project['custom_fields'] ? json_decode($project['custom_fields'], true) : null;
    $project['tags'] = $project['tags'] ? json_decode($project['tags'], true) : null;
    $project['createdAt'] = $project['created_at'];
    $project['updatedAt'] = $project['updated_at'];
    
    unset($project['client_name'], $project['client_email'], $project['client_phone'], 
          $project['created_by'], $project['share_token'], $project['custom_fields'], 
          $project['tags'], $project['created_at'], $project['updated_at']);
    
    return $project;
}

function guidv4() {
    $data = random_bytes(16);
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80);
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}
?>
