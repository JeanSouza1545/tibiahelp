import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './routes'
import { ThemeProvider } from './contexts/ThemeContext'

import './styles/colorToken.css'
import './styles/textToken.css'
import './styles/styleToken.css'
import './styles/themes.css'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={Router}/>
    </ThemeProvider>
  </StrictMode>
)