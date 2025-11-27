import { Link } from 'react-router-dom'
import type { Project } from '../types'
import { Calendar, User, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    lead: 'bg-blue-500/10 text-blue-500',
    active: 'bg-green-500/10 text-green-500',
    paused: 'bg-yellow-500/10 text-yellow-500',
    completed: 'bg-primary-500/10 text-primary-500',
    cancelled: 'bg-red-500/10 text-red-500',
  }

  return (
    <Link
      to={`/projects/${project.id}`}
      className="card hover:border-primary-500/50 transition-all duration-200 group"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
          {project.name}
        </h3>
        <span className={`badge ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>

      <p className="text-dark-400 text-sm mb-4 line-clamp-2">
        {project.description || 'No description provided'}
      </p>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-dark-300">
          <User className="w-4 h-4" />
          <span>{project.clientName}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-dark-300">
          <Calendar className="w-4 h-4" />
          <span>{new Date(project.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-dark-800 flex items-center justify-between">
        <div className="flex -space-x-2">
          {project.assignedTo.slice(0, 3).map((userId, index) => (
            <div
              key={userId}
              className="w-8 h-8 rounded-full bg-primary-600 border-2 border-dark-900 flex items-center justify-center text-xs font-semibold text-white"
            >
              {index + 1}
            </div>
          ))}
          {project.assignedTo.length > 3 && (
            <div className="w-8 h-8 rounded-full bg-dark-700 border-2 border-dark-900 flex items-center justify-center text-xs text-dark-300">
              +{project.assignedTo.length - 3}
            </div>
          )}
        </div>
        <ExternalLink className="w-4 h-4 text-dark-400 group-hover:text-primary-400 transition-colors" />
      </div>
    </Link>
  )
}
