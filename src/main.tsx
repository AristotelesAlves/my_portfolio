import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Router'

import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
