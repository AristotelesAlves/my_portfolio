import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Nav } from "../components/Nav"
import { Post } from "../components/Post"
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth';

function Home(){
        
    const {user} = useContext(AuthContext)
    console.log(user)

    console.log()
    return(
        <div className="flex flex-col items-center w-full h-full">
            <Header/>
            <Nav/>
            {!user ? <h1>fazer login</h1>: <h1>logado</h1>}
            <Outlet/>
        </div>
    )
}

export { Home}