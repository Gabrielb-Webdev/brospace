import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { LogIn } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuthStore()
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (email && password) {
        await login(email, password)
        toast.success('Welcome to Brospace!')
        navigate('/')
      } else {
        toast.error('Please fill in all fields')
      }
    } catch (error) {
      toast.error('Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative">
      {/* Gradient Orbs Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 animate-float" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: '7s' }} />
      
      <div className="card relative z-10 animate-fade-in max-w-md mx-auto">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/logo.svg" alt="Brospace" className="h-12" />
            <span className="text-3xl font-bold font-poppins">
              <span className="gradient-text">Brospace</span>
            </span>
          </div>
          <p className="text-sm text-text-secondary">
            by <span className="text-primary font-semibold">BrodevLab</span>
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold font-poppins mb-2">Welcome Back</h2>
          <p className="text-text-secondary">Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full"
              placeholder="Gbustosgarcia01@gmail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input w-full"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full flex items-center justify-center gap-2 group"
          >
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <>
                <LogIn className="w-5 h-5" />
                <span>Sign In</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-text-muted">
            Demo: Use any email and password to login
          </p>
        </div>
      </div>
    </div>
  )
}
