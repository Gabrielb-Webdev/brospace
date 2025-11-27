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
    <div className="relative min-h-screen">
      {/* Gradient Orbs Background */}
      <div 
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 opacity-30"
        style={{ 
          background: '#7C3AED',
          animation: 'float 20s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 opacity-30"
        style={{ 
          background: '#EC4899',
          animation: 'float 20s ease-in-out infinite',
          animationDelay: '7s'
        }}
      />
      
      <div 
        className="relative z-10 max-w-md mx-auto p-8 rounded-2xl border"
        style={{
          background: '#1A0B2E',
          borderColor: 'rgba(124, 58, 237, 0.2)',
          boxShadow: '0 8px 40px rgba(124, 58, 237, 0.25)'
        }}
      >
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/logo.svg" alt="Brospace" className="h-12" />
            <span className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Brospace
              </span>
            </span>
          </div>
          <p className="text-sm" style={{ color: '#CBD5E1' }}>
            by <span style={{ color: '#7C3AED', fontWeight: 600 }}>BrodevLab</span>
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: '#FFFFFF' }}>
            Welcome Back
          </h2>
          <p style={{ color: '#CBD5E1' }}>Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#CBD5E1' }}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg transition-all"
              style={{
                background: '#1A0B2E',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                color: '#FFFFFF'
              }}
              placeholder="Gbustosgarcia01@gmail.com"
              required
              onFocus={(e) => {
                e.target.style.borderColor = '#7C3AED'
                e.target.style.boxShadow = '0 0 0 2px rgba(124, 58, 237, 0.2)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(124, 58, 237, 0.3)'
                e.target.style.boxShadow = 'none'
              }}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: '#CBD5E1' }}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg transition-all"
              style={{
                background: '#1A0B2E',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                color: '#FFFFFF'
              }}
              placeholder="••••••••"
              required
              onFocus={(e) => {
                e.target.style.borderColor = '#7C3AED'
                e.target.style.boxShadow = '0 0 0 2px rgba(124, 58, 237, 0.2)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(124, 58, 237, 0.3)'
                e.target.style.boxShadow = 'none'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all"
            style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
              color: '#FFFFFF',
              boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)',
              opacity: isLoading ? 0.5 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(124, 58, 237, 0.5)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.3)'
            }}
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
          <p className="text-sm" style={{ color: '#94A3B8' }}>
            Demo: Use any email and password to login
          </p>
        </div>
      </div>
    </div>
  )
}
