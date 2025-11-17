import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext'
import { CachedAuthProvider } from './contexts/CachedAuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CachedAuthProvider>
          <App />
          <SpeedInsights />
        </CachedAuthProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
