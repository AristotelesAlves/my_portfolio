import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Nav } from "../components/Nav"
import { Post } from "../components/Post"

function Home(){
    return(
        <div className="flex flex-col items-center w-full h-full">
            <Header/>
            <Nav/>
            <Outlet/>
        </div>
    )
}

export { Home}