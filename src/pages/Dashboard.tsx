import { useEffect } from 'react'
import { useAppStore } from '../store/appStore'
import { useAuthStore } from '../store/authStore'
import {
  TrendingUp,
  FolderKanban,
  CheckSquare,
  Clock,
  Users,
  AlertCircle,
} from 'lucide-react'

export default function Dashboard() {
  const { projects, tasks, fetchProjects } = useAppStore()
  const { user } = useAuthStore()
  
  useEffect(() => {
    fetchProjects()
  }, [])

  const stats = [
    {
      name: 'Active Projects',
      value: projects.filter((p) => p.status === 'active').length,
      icon: FolderKanban,
      color: 'text-primary-500',
      bg: 'bg-primary-500/10',
    },
    {
      name: 'Tasks In Progress',
      value: tasks.filter((t) => t.status === 'in-progress').length,
      icon: CheckSquare,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      name: 'Team Members',
      value: 5,
      icon: Users,
      color: 'text-green-500',
      bg: 'bg-green-500/10',
    },
    {
      name: 'Hours Tracked',
      value: '24.5',
      icon: Clock,
      color: 'text-yellow-500',
      bg: 'bg-yellow-500/10',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-dark-400">
          Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.name} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dark-400 text-sm mb-1">{stat.name}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`${stat.bg} p-3 rounded-lg`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
            <TrendingUp className="w-5 h-5 text-primary-500" />
          </div>
          {projects.length === 0 ? (
            <div className="text-center py-8">
              <FolderKanban className="w-12 h-12 text-dark-600 mx-auto mb-3" />
              <p className="text-dark-400 mb-4">No projects yet</p>
              <button className="btn-primary">Create First Project</button>
            </div>
          ) : (
            <div className="space-y-3">
              {projects.slice(0, 5).map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors cursor-pointer"
                >
                  <div>
                    <p className="font-medium text-white">{project.name}</p>
                    <p className="text-sm text-dark-400">{project.clientName}</p>
                  </div>
                  <span
                    className={`badge ${
                      project.status === 'active'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-dark-700 text-dark-300'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Urgent Tasks */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Urgent Tasks</h2>
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
          {tasks.filter((t) => t.priority === 'urgent').length === 0 ? (
            <div className="text-center py-8">
              <CheckSquare className="w-12 h-12 text-dark-600 mx-auto mb-3" />
              <p className="text-dark-400">No urgent tasks</p>
            </div>
          ) : (
            <div className="space-y-3">
              {tasks
                .filter((t) => t.priority === 'urgent')
                .slice(0, 5)
                .map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start gap-3 p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={task.status === 'completed'}
                      className="mt-1"
                      readOnly
                    />
                    <div className="flex-1">
                      <p className="font-medium text-white">{task.title}</p>
                      <p className="text-sm text-dark-400 mt-1">
                        {task.description || 'No description'}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
