// API Configuration
// @ts-ignore - Vite provides import.meta.env
export const API_URL = import.meta.env.PROD
  ? 'https://darksalmon-loris-457396.hostingersite.com/api'
  : 'http://localhost:3000/api'

export const API_ENDPOINTS = {
  AUTH_LOGIN: `${API_URL}/auth.php?action=login`,
  AUTH_REGISTER: `${API_URL}/auth.php?action=register`,
  AUTH_USER: `${API_URL}/auth.php`,
  PROJECTS: `${API_URL}/projects.php`,
  TASKS: `${API_URL}/tasks.php`,
  INIT_DB: `${API_URL}/init-db.php`,
}

// Fetch wrapper with error handling
export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  try {
    const response = await fetch(endpoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Request failed')
    }

    return data
  } catch (error) {
    console.error('API Request failed:', error)
    throw error
  }
}
