import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-dark px-4 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[200px] translate-x-1/2 translate-y-1/2" />
      
      <div className="w-full max-w-md relative z-10">
        <Outlet />
      </div>
    </div>
  )
}
