import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './components/Post'
import { Visita } from './components/Visita'
import { ErroPage } from './components/ErroPage'

import { Sobre } from './components/Sobre'
import { Form } from './components/Form'

const router = createBrowserRouter([
    { 
        path: '/',
        element: <Home/>,
        errorElement: <ErroPage/>,
        children:[
            {
                path: "/",
                element: <Post/>
            },
            {
                path: "/visita",
                element: <Visita/>,            
            },
            {
                path: "/sobre",
                element: <Sobre/>
            },
            {
                path: "/form",
                element: <Form/>
            }
        ]
    },
])

export { router }