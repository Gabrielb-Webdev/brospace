import { useParams } from 'react-router-dom'
import { useAppStore } from '../store/appStore'
import { Eye, MessageSquare } from 'lucide-react'

export default function ClientView() {
  const { shareToken } = useParams()
  const { projects } = useAppStore()

  // Find project by share token
  const project = projects.find((p) => p.shareToken === shareToken)

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center px-4">
        <div className="card max-w-md w-full text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-white mb-2">Project Not Found</h1>
          <p className="text-dark-400">
            The project you're looking for doesn't exist or the link has expired.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <header className="bg-dark-900 border-b border-dark-800 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Eye className="w-6 h-6 text-primary-500" />
            <h1 className="text-2xl font-bold text-white">{project.name}</h1>
          </div>
          <p className="text-dark-400">Client: {project.clientName}</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-6">
          {/* Project Info */}
          <div className="card">
            <h2 className="text-xl font-semibold text-white mb-4">Project Status</h2>
            <div className="space-y-3">
              <div>
                <span className="text-dark-400 text-sm">Status:</span>
                <span className="ml-2 badge bg-primary-500/10 text-primary-500">
                  {project.status}
                </span>
              </div>
              {project.description && (
                <div>
                  <span className="text-dark-400 text-sm">Description:</span>
                  <p className="text-white mt-1">{project.description}</p>
                </div>
              )}
              <div>
                <span className="text-dark-400 text-sm">Created:</span>
                <span className="text-white ml-2">
                  {new Date(project.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-primary-500" />
              <h2 className="text-xl font-semibold text-white">Comments & Updates</h2>
            </div>
            <div className="text-center py-8 text-dark-400">
              No comments yet. You can leave feedback here.
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
