import { create } from 'zustand'
import type { Project, Task, TimeEntry, Comment } from '../types'

interface AppState {
  projects: Project[]
  tasks: Task[]
  timeEntries: TimeEntry[]
  comments: Comment[]
  activeTimer: TimeEntry | null
  
  setProjects: (projects: Project[]) => void
  addProject: (project: Project) => void
  updateProject: (id: string, updates: Partial<Project>) => void
  deleteProject: (id: string) => void
  
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
  
  setProjects: (projects) => set({ projects }),
  
  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),
  
  updateProject: (id, updates) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === id ? { ...p, ...updates, updatedAt: new Date() } : p
      ),
    })),
  
  deleteProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((p) => p.id !== id),
    })),
  
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
