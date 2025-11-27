export type UserRole = 'admin' | 'member' | 'client'

export type ProjectStatus = 'lead' | 'active' | 'paused' | 'completed' | 'cancelled'

export type TaskStatus = 'todo' | 'in-progress' | 'review' | 'completed'

export type TaskPriority = 'urgent' | 'high' | 'normal' | 'low'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
  createdAt: Date
}

export interface CustomField {
  id: string
  name: string
  type: 'text' | 'number' | 'date' | 'select' | 'multiselect' | 'url' | 'email'
  options?: string[] // For select/multiselect
  required?: boolean
}

export interface Project {
  id: string
  name: string
  description?: string
  clientName: string
  clientEmail: string
  clientPhone?: string
  status: ProjectStatus
  assignedTo: string[] // User IDs
  createdBy: string
  createdAt: Date
  updatedAt: Date
  shareToken: string // For client view
  customFields?: Record<string, any>
  tags?: string[]
}

export interface Task {
  id: string
  projectId: string
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  assignedTo: string[] // User IDs
  createdBy: string
  createdAt: Date
  updatedAt: Date
  dueDate?: Date
  estimatedTime?: number // minutes
  timeTracked?: number // minutes
  customFields?: Record<string, any>
  tags?: string[]
}

export interface TimeEntry {
  id: string
  taskId: string
  userId: string
  startTime: Date
  endTime?: Date
  duration?: number // minutes
  note?: string
}

export interface Comment {
  id: string
  projectId: string
  taskId?: string
  userId: string
  userName: string
  content: string
  createdAt: Date
  isClientVisible: boolean
}

export interface ActivityLog {
  id: string
  projectId: string
  taskId?: string
  userId: string
  userName: string
  action: string
  details: string
  createdAt: Date
}

export interface DailySummary {
  date: Date
  projectId: string
  tasksCompleted: number
  tasksCreated: number
  timeTracked: number
  activities: ActivityLog[]
}
