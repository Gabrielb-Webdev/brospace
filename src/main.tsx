import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Version info
console.log(
  '%c🚀 Brospace v2.2 %c by Brodev Lab',
  'background: linear-gradient(135deg, #7C3AED 0%, #EC4899 100%); color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold; font-size: 14px;',
  'color: #7C3AED; font-weight: 600; font-size: 14px;'
);
console.log('%c📅 Build: November 27, 2025', 'color: #666; font-size: 12px;');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
