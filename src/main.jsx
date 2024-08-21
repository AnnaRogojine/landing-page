import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AnaRogojineLandingPage from './AnaRogojineLandingPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnaRogojineLandingPage />
  </StrictMode>,
)
