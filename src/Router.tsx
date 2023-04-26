import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './components/Post'
import { Visita } from './components/Visita'
import { ErroPage } from './components/ErroPage'

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
                element: <Visita/>
            }
        ]
    },
    { 
        path: '/1',
        element: <h1>Hello world</h1>
    },
])

export { router }