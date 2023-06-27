import { Outlet, useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Nav } from "../components/Nav"
import { Footer } from "../components/Footer"



function Home(){

    const { slug } = useParams();
    console.log(slug)

    return(
        <div className="w-full h-full flex flex-col shadow-2xl items-center px-64 bg-zinc-800 max-xl:px-28 max-md:px-0">
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