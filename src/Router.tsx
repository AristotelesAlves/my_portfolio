import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { ErroPage } from './pages/ErroPage'

const router = createBrowserRouter([
    { 
        path: '/',
        element: <Home/>,
        errorElement: <ErroPage/>,
        // children:[
        //     {
        //         path: "/",
        //         element: <Post/>
        //     },
        // ]
    },
])

export { router }