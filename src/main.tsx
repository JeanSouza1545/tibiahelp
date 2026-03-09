import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './routes'

import './style.css'
import './styles/colorToken.css'
import './styles/textToken.css'
import './styles/styleToken.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>
)