import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Router'
import { AuthProvider } from './contexts/auth';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
