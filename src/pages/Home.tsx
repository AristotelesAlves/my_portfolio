import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Nav } from "../components/Nav"
import { Footer } from "../components/Footer"



function Home(){
    return(
        <div className="w-full h-full flex flex-col shadow-2xl items-center px-64 bg-slate-600 max-xl:px-32">
            <Header/>
            <div className="w-full h-full bg-gradient-to-r from-linear_01 to-linear_02">
                <Nav/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    )
}

export { Home}