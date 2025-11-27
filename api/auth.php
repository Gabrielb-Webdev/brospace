<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];
$db = getDB();

switch ($method) {
    case 'POST': // Login or Register
        $data = getRequestBody();
        $action = $_GET['action'] ?? 'login';
        
        if ($action === 'register') {
            // Register new user
            $email = $data['email'] ?? '';
            $password = $data['password'] ?? '';
            $name = $data['name'] ?? '';
            $role = $data['role'] ?? 'member';
            
            if (!$email || !$password || !$name) {
                sendResponse(['error' => 'Email, password, and name are required'], 400);
            }
            
            // Check if user exists
            $stmt = $db->prepare("SELECT id FROM users WHERE email = ?");
            $stmt->execute([$email]);
            if ($stmt->fetch()) {
                sendResponse(['error' => 'User already exists'], 409);
            }
            
            // Create user
            $id = guidv4();
            $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
            
            $stmt = $db->prepare("INSERT INTO users (id, email, password, name, role) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([$id, $email, $hashedPassword, $name, $role]);
            
            $user = [
                'id' => $id,
                'email' => $email,
                'name' => $name,
                'role' => $role,
                'createdAt' => date('c')
            ];
            
            sendResponse(['success' => true, 'user' => $user], 201);
            
        } else {
            // Login
            $email = $data['email'] ?? '';
            $password = $data['password'] ?? '';
            
            if (!$email || !$password) {
                sendResponse(['error' => 'Email and password are required'], 400);
            }
            
            // For demo: any email/password works, create user if not exists
            $stmt = $db->prepare("SELECT * FROM users WHERE email = ?");
            $stmt->execute([$email]);
            $user = $stmt->fetch();
            
            if (!$user) {
                // Auto-create user for demo
                $id = guidv4();
                $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
                $name = explode('@', $email)[0];
                $role = 'admin'; // First user is admin
                
                $stmt = $db->prepare("INSERT INTO users (id, email, password, name, role) VALUES (?, ?, ?, ?, ?)");
                $stmt->execute([$id, $email, $hashedPassword, $name, $role]);
                
                $user = [
                    'id' => $id,
                    'email' => $email,
                    'name' => $name,
                    'role' => $role,
                    'created_at' => date('Y-m-d H:i:s')
                ];
            }
            
            // Return user data (without password)
            unset($user['password']);
            $user['createdAt'] = $user['created_at'];
            unset($user['created_at']);
            
            sendResponse(['success' => true, 'user' => $user]);
        }
        break;
        
    case 'GET': // Get current user
        $userId = $_GET['id'] ?? null;
        if (!$userId) {
            sendResponse(['error' => 'User ID required'], 400);
        }
        
        $stmt = $db->prepare("SELECT id, email, name, role, avatar, created_at FROM users WHERE id = ?");
        $stmt->execute([$userId]);
        $user = $stmt->fetch();
        
        if (!$user) {
            sendResponse(['error' => 'User not found'], 404);
        }
        
        $user['createdAt'] = $user['created_at'];
        unset($user['created_at']);
        
        sendResponse($user);
        break;
        
    default:
        sendResponse(['error' => 'Method not allowed'], 405);
}

function guidv4() {
    $data = random_bytes(16);
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80);
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}
?>
