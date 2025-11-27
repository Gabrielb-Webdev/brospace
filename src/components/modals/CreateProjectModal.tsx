import { useState } from 'react'
import { useAppStore } from '../../store/appStore'
import { useAuthStore } from '../../store/authStore'
import { X } from 'lucide-react'
import toast from 'react-hot-toast'
import type { Project, ProjectStatus } from '../../types'

interface CreateProjectModalProps {
  onClose: () => void
}

export default function CreateProjectModal({ onClose }: CreateProjectModalProps) {
  const { addProject } = useAppStore()
  const { user } = useAuthStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    status: 'lead' as ProjectStatus,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const newProject: Project = {
        id: crypto.randomUUID(),
        ...formData,
        assignedTo: [],
        createdBy: user?.id || '',
        createdAt: new Date(),
        updatedAt: new Date(),
        shareToken: crypto.randomUUID(),
      }

      addProject(newProject)
      toast.success('Project created successfully!')
      onClose()
    } catch (error) {
      toast.error('Failed to create project')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="card max-w-2xl w-full animate-slide-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Create New Project</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-dark-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-dark-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Project Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input w-full"
              placeholder="Website Redesign"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="input w-full min-h-[100px]"
              placeholder="Project details..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Client Name *
              </label>
              <input
                type="text"
                required
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="input w-full"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Client Email *
              </label>
              <input
                type="email"
                required
                value={formData.clientEmail}
                onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                className="input w-full"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Client Phone
              </label>
              <input
                type="tel"
                value={formData.clientPhone}
                onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                className="input w-full"
                placeholder="+1 234 567 890"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Initial Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as ProjectStatus })}
                className="input w-full"
              >
                <option value="lead">Lead</option>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
