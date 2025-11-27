import { create } from 'zustand'
import type { Project, Task, TimeEntry, Comment } from '../types'
import { API_ENDPOINTS, apiRequest } from '../lib/api'

interface AppState {
  projects: Project[]
  tasks: Task[]
  timeEntries: TimeEntry[]
  comments: Comment[]
  activeTimer: TimeEntry | null
  isLoading: boolean
  
  fetchProjects: () => Promise<void>
  setProjects: (projects: Project[]) => void
  addProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt' | 'shareToken'>) => Promise<void>
  updateProject: (id: string, updates: Partial<Project>) => Promise<void>
  deleteProject: (id: string) => Promise<void>
  
  setTasks: (tasks: Task[]) => void
  addTask: (task: Task) => void
  updateTask: (id: string, updates: Partial<Task>) => void
  deleteTask: (id: string) => void
  
  startTimer: (taskId: string, userId: string) => void
  stopTimer: () => void
  
  addComment: (comment: Comment) => void
  
  clearStore: () => void
}

export const useAppStore = create<AppState>((set, get) => ({
  projects: [],
  tasks: [],
  timeEntries: [],
  comments: [],
  activeTimer: null,
  isLoading: false,
  
  fetchProjects: async () => {
    set({ isLoading: true })
    try {
      const projects = await apiRequest(API_ENDPOINTS.PROJECTS)
      set({ projects: projects || [], isLoading: false })
    } catch (error) {
      console.error('Failed to fetch projects:', error)
      set({ isLoading: false })
    }
  },
  
  setProjects: (projects) => set({ projects }),
  
  addProject: async (projectData) => {
    set({ isLoading: true })
    try {
      const newProject = await apiRequest(API_ENDPOINTS.PROJECTS, {
        method: 'POST',
        body: JSON.stringify(projectData),
      })
      set((state) => ({ 
        projects: [...state.projects, newProject],
        isLoading: false 
      }))
    } catch (error) {
      console.error('Failed to create project:', error)
      set({ isLoading: false })
      throw error
    }
  },
  
  updateProject: async (id, updates) => {
    set({ isLoading: true })
    try {
      await apiRequest(`${API_ENDPOINTS.PROJECTS}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      })
      set((state) => ({
        projects: state.projects.map((p) =>
          p.id === id ? { ...p, ...updates, updatedAt: new Date() } : p
        ),
        isLoading: false,
      }))
    } catch (error) {
      console.error('Failed to update project:', error)
      set({ isLoading: false })
      throw error
    }
  },
  
  deleteProject: async (id) => {
    set({ isLoading: true })
    try {
      await apiRequest(`${API_ENDPOINTS.PROJECTS}/${id}`, {
        method: 'DELETE',
      })
      set((state) => ({
        projects: state.projects.filter((p) => p.id !== id),
        isLoading: false,
      }))
    } catch (error) {
      console.error('Failed to delete project:', error)
      set({ isLoading: false })
      throw error
    }
  },
  
  setTasks: (tasks) => set({ tasks }),
  
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  
  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, ...updates, updatedAt: new Date() } : t
      ),
    })),
  
  deleteTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
  
  startTimer: (taskId, userId) => {
    const timer: TimeEntry = {
      id: crypto.randomUUID(),
      taskId,
      userId,
      startTime: new Date(),
    }
    set({ activeTimer: timer })
  },
  
  stopTimer: () => {
    const { activeTimer } = get()
    if (activeTimer) {
      const endTime = new Date()
      const duration = Math.floor(
        (endTime.getTime() - activeTimer.startTime.getTime()) / 60000
      )
      const completedEntry = {
        ...activeTimer,
        endTime,
        duration,
      }
      set((state) => ({
        timeEntries: [...state.timeEntries, completedEntry],
        activeTimer: null,
      }))
    }
  },
  
  addComment: (comment) =>
    set((state) => ({ comments: [...state.comments, comment] })),
  
  clearStore: () =>
    set({
      projects: [],
      tasks: [],
      timeEntries: [],
      comments: [],
      activeTimer: null,
    }),
}))
