# 🏗️ ARQUITECTURA DE BROSPACE

## 📊 Diagrama de Componentes

```
┌─────────────────────────────────────────────────────────────────┐
│                         BROSPACE APP                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐         ┌──────────────────────────────┐    │
│  │              │         │    React Router v6           │    │
│  │  Auth Store  │◄────────┤    (Navigation)              │    │
│  │  (Zustand)   │         │                              │    │
│  │              │         │  /auth/login                 │    │
│  └──────────────┘         │  /                           │    │
│         ▲                 │  /projects                   │    │
│         │                 │  /projects/:id               │    │
│         │                 │  /tasks                      │    │
│         │                 │  /team                       │    │
│         │                 │  /settings                   │    │
│  ┌──────┴───────┐         │  /client/:token              │    │
│  │              │         └──────────────────────────────┘    │
│  │   App Store  │                                             │
│  │   (Zustand)  │                                             │
│  │              │         ┌──────────────────────────────┐    │
│  │  - Projects  │◄────────┤    UI Components             │    │
│  │  - Tasks     │         │                              │    │
│  │  - Comments  │         │  ┌────────────────────────┐ │    │
│  │  - Time      │         │  │  Layouts               │ │    │
│  │              │         │  │  - AuthLayout          │ │    │
│  └──────────────┘         │  │  - DashboardLayout     │ │    │
│                           │  └────────────────────────┘ │    │
│                           │                              │    │
│                           │  ┌────────────────────────┐ │    │
│                           │  │  Pages                 │ │    │
│                           │  │  - Login               │ │    │
│                           │  │  - Dashboard           │ │    │
│                           │  │  - Projects            │ │    │
│                           │  │  - ProjectDetails      │ │    │
│                           │  │  - Tasks               │ │    │
│                           │  │  - Team                │ │    │
│                           │  │  - ClientView          │ │    │
│                           │  │  - Settings            │ │    │
│                           │  └────────────────────────┘ │    │
│                           │                              │    │
│                           │  ┌────────────────────────┐ │    │
│                           │  │  Components            │ │    │
│                           │  │  - ProjectCard         │ │    │
│                           │  │  - TaskCard            │ │    │
│                           │  │  - Timer               │ │    │
│                           │  │  - CommentSection      │ │    │
│                           │  │  - Modals/             │ │    │
│                           │  └────────────────────────┘ │    │
│                           └──────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Flujo de Datos

### 1. Usuario inicia sesión

```
User → Login Form → useAuthStore.setUser() → Store persiste en localStorage
                                            ↓
                                     Router redirige a "/"
                                            ↓
                                     DashboardLayout carga
```

### 2. Usuario crea proyecto

```
User → Click "New Project" → CreateProjectModal abre
                                     ↓
                             Llena formulario
                                     ↓
                             Submit → useAppStore.addProject()
                                     ↓
                             Store actualiza estado
                                     ↓
                             UI re-renderiza automáticamente
                                     ↓
                             Modal cierra + Toast de éxito
```

### 3. Cliente ve proyecto

```
Admin comparte link → Client abre /client/:token
                                     ↓
                             ClientView busca proyecto por token
                                     ↓
                             Renderiza vista read-only
                                     ↓
                             Cliente ve estado y puede comentar
```

---

## 📁 Estructura de Archivos Detallada

```
brospace/
│
├── 📄 package.json              # Dependencias y scripts
├── 📄 vite.config.ts            # Config de Vite
├── 📄 tailwind.config.js        # Config de Tailwind
├── 📄 tsconfig.json             # Config de TypeScript
├── 📄 .gitignore                # Archivos ignorados por Git
├── 📄 README.md                 # Documentación principal
├── 📄 GETTING_STARTED.md        # Guía de inicio
├── 📄 PROJECT_SUMMARY.md        # Resumen del proyecto
├── 📄 ROADMAP.md                # Plan de desarrollo
├── 📄 QUICK_START.md            # Inicio rápido
│
├── 📁 public/                   # Archivos estáticos
│   ├── logo.svg                 # Logo de Brospace
│   └── vite.svg                 # Logo de Vite
│
└── 📁 src/                      # Código fuente
    │
    ├── 📄 main.tsx              # Entry point
    ├── 📄 App.tsx               # Componente raíz
    ├── 📄 index.css             # Estilos globales
    │
    ├── 📁 components/           # Componentes reutilizables
    │   ├── ProjectCard.tsx      # Card de proyecto
    │   ├── TaskCard.tsx         # Card de tarea (próximo)
    │   ├── Timer.tsx            # Timer de tiempo (próximo)
    │   │
    │   └── 📁 modals/           # Modales
    │       ├── CreateProjectModal.tsx
    │       ├── CreateTaskModal.tsx       (próximo)
    │       └── InviteTeamModal.tsx       (próximo)
    │
    ├── 📁 layouts/              # Layouts de página
    │   ├── AuthLayout.tsx       # Layout para auth
    │   └── DashboardLayout.tsx  # Layout principal con sidebar
    │
    ├── 📁 pages/                # Páginas de la app
    │   ├── 📁 auth/
    │   │   └── Login.tsx        # Página de login
    │   │
    │   ├── Dashboard.tsx        # Dashboard principal
    │   ├── Projects.tsx         # Lista de proyectos
    │   ├── ProjectDetails.tsx   # Detalle de proyecto
    │   ├── Tasks.tsx            # Lista de tareas
    │   ├── Team.tsx             # Gestión de equipo
    │   ├── ClientView.tsx       # Vista para clientes
    │   └── Settings.tsx         # Configuración
    │
    ├── 📁 store/                # Estado global (Zustand)
    │   ├── authStore.ts         # Autenticación
    │   └── appStore.ts          # Proyectos, tareas, etc.
    │
    ├── 📁 types/                # Tipos de TypeScript
    │   └── index.ts             # Todas las interfaces
    │
    ├── 📁 constants/            # Constantes
    │   └── index.ts             # Colores, configs, etc.
    │
    ├── 📁 utils/                # Utilidades (próximo)
    │   ├── formatters.ts        # Formatear fechas, tiempo, etc.
    │   ├── validators.ts        # Validaciones
    │   └── helpers.ts           # Funciones auxiliares
    │
    ├── 📁 hooks/                # Custom React hooks (próximo)
    │   ├── useTimer.ts          # Hook para timer
    │   └── useSearch.ts         # Hook para búsqueda
    │
    ├── 📁 services/             # Servicios (próximo)
    │   ├── authService.ts       # Lógica de auth con Firebase
    │   ├── projectService.ts    # CRUD de proyectos
    │   └── taskService.ts       # CRUD de tareas
    │
    └── 📁 lib/                  # Librerías externas (próximo)
        └── firebase.ts          # Configuración de Firebase
```

---

## 🎨 Sistema de Diseño

### Colores

```typescript
// tailwind.config.js

primary: {
  50:  '#f0f4ff',  // Más claro
  100: '#e0e9ff',
  200: '#c7d7fe',
  300: '#a5bbfc',
  400: '#8095f8',
  500: '#6366f1',  // Base
  600: '#4f46e5',  // Botones
  700: '#4338ca',
  800: '#3730a3',
  900: '#312e81',
  950: '#1e1b4b',  // Más oscuro
}

dark: {
  50:  '#f8fafc',  // Más claro
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',  // Cards
  900: '#0f172a',  // Sidebar
  950: '#020617',  // Background principal
}
```

### Componentes Base

```css
/* index.css */

.btn-primary {
  background: #4f46e5;      /* primary-600 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background 200ms;
}

.btn-primary:hover {
  background: #4338ca;      /* primary-700 */
}

.card {
  background: #0f172a;      /* dark-900 */
  border: 1px solid #1e293b; /* dark-800 */
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.input {
  background: #1e293b;      /* dark-800 */
  border: 1px solid #334155; /* dark-700 */
  color: #f1f5f9;           /* dark-100 */
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.input:focus {
  outline: none;
  ring: 2px solid #6366f1;  /* primary-500 */
  border-color: transparent;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.625rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}
```

---

## 🔌 Conexiones entre Componentes

### Dashboard → Projects

```tsx
// Dashboard.tsx
<Link to="/projects">
  <button>View All Projects</button>
</Link>

// Projects.tsx carga automáticamente
```

### Projects → ProjectDetails

```tsx
// ProjectCard.tsx
<Link to={`/projects/${project.id}`}>
  <div className="card">...</div>
</Link>

// ProjectDetails.tsx recibe el ID
const { projectId } = useParams()
const project = useAppStore(s => s.projects.find(p => p.id === projectId))
```

### Admin → Client

```tsx
// Generar link para cliente
const clientLink = `${window.location.origin}/client/${project.shareToken}`

// Cliente abre link
// ClientView.tsx
const { shareToken } = useParams()
const project = useAppStore(s => s.projects.find(p => p.shareToken === shareToken))
```

---

## 🔄 Estado Global (Zustand)

### authStore.ts

```typescript
interface AuthState {
  user: User | null
  isLoading: boolean
  setUser: (user: User | null) => void
  logout: () => void
}

// Uso en componentes
const { user, logout } = useAuthStore()
```

### appStore.ts

```typescript
interface AppState {
  projects: Project[]
  tasks: Task[]
  timeEntries: TimeEntry[]
  comments: Comment[]
  activeTimer: TimeEntry | null
  
  // Projects
  setProjects: (projects: Project[]) => void
  addProject: (project: Project) => void
  updateProject: (id: string, updates: Partial<Project>) => void
  deleteProject: (id: string) => void
  
  // Tasks
  setTasks: (tasks: Task[]) => void
  addTask: (task: Task) => void
  updateTask: (id: string, updates: Partial<Task>) => void
  deleteTask: (id: string) => void
  
  // Timer
  startTimer: (taskId: string, userId: string) => void
  stopTimer: () => void
  
  // Comments
  addComment: (comment: Comment) => void
  
  clearStore: () => void
}

// Uso en componentes
const { projects, addProject } = useAppStore()
```

---

## 🎯 Patrones de Código

### Crear un nuevo componente

```tsx
// src/components/MyComponent.tsx

import { useState } from 'react'
import { useAppStore } from '../store/appStore'
import type { MyType } from '../types'

interface MyComponentProps {
  data: MyType
  onAction: () => void
}

export default function MyComponent({ data, onAction }: MyComponentProps) {
  const [localState, setLocalState] = useState('')
  const { globalState } = useAppStore()
  
  return (
    <div className="card">
      {/* JSX aquí */}
    </div>
  )
}
```

### Crear una nueva página

```tsx
// src/pages/MyPage.tsx

import { useState } from 'react'
import { useAppStore } from '../store/appStore'
import MyComponent from '../components/MyComponent'

export default function MyPage() {
  const { data } = useAppStore()
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          My Page Title
        </h1>
        <p className="text-dark-400">
          Description here
        </p>
      </div>
      
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(item => (
          <MyComponent key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}
```

### Agregar una nueva ruta

```tsx
// src/App.tsx

// 1. Import la página
import MyPage from './pages/MyPage'

// 2. Agregar en las rutas
<Route path="/" element={<DashboardLayout />}>
  {/* ... otras rutas */}
  <Route path="mypage" element={<MyPage />} />
</Route>

// 3. Agregar link en sidebar (DashboardLayout.tsx)
const navigation = [
  // ... otras páginas
  { name: 'My Page', href: '/mypage', icon: MyIcon },
]
```

---

## 🚀 Comandos de Desarrollo

```powershell
# Desarrollo
npm run dev              # Inicia servidor en http://localhost:3000

# Build
npm run build            # Compila para producción en /dist

# Preview
npm run preview          # Preview del build de producción

# Lint
npm run lint             # Verifica errores de código

# Agregar dependencia
npm install [package]    # Instala nueva dependencia

# Actualizar dependencias
npm update               # Actualiza todas las deps
```

---

## 🎓 Recursos de Aprendizaje

### Documentación Oficial:
- **React:** https://react.dev/
- **TypeScript:** https://www.typescriptlang.org/docs/
- **Vite:** https://vitejs.dev/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Zustand:** https://docs.pmnd.rs/zustand/
- **React Router:** https://reactrouter.com/

### Tutoriales Recomendados:
- React Hooks: https://react.dev/reference/react
- TypeScript con React: https://react.dev/learn/typescript
- Tailwind UI Components: https://tailwindui.com/components

---

**¡Ya entiendes la arquitectura completa de Brospace! 🎉**
