import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page_Router from './Page_Router.tsx'

createRoot(document.getElementById('root')!).render(
  <Page_Router />
  
)
