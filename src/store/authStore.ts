import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '../types'
import { API_ENDPOINTS, apiRequest } from '../lib/api'

interface AuthState {
  user: User | null
  isLoading: boolean
  setUser: (user: User | null) => void
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      
      setUser: (user) => set({ user }),
      
      login: async (email: string, password: string) => {
        set({ isLoading: true })
        try {
          const response = await apiRequest(API_ENDPOINTS.AUTH_LOGIN, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
          })
          
          if (response.success && response.user) {
            set({ user: response.user, isLoading: false })
          } else {
            throw new Error('Login failed')
          }
        } catch (error) {
          set({ isLoading: false })
          throw error
        }
      },
      
      logout: () => set({ user: null }),
    }),
    {
      name: 'brospace-auth',
    }
  )
)
