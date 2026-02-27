import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import healthCheck from './services/healthCheck'
// import { router } from './router.tsx'
// import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <h1>TibiaHelp</h1>
      <p>Frontend React em funcionamento</p>

      <button onClick={healthCheck}>healthCheck</button>
    </div>
  </StrictMode>
)
