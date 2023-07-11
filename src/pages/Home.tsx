import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Nav } from "../components/Nav"
import { GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";



function Home(){

    return(
        <div className="w-full h-full flex flex-col shadow-2xl items-center max-2xl:px-20 bg-gradient-to-r from-linear_01 to-linear_02 max-xl:px-0 max-md:px-0">
            <Header/>
            <div className="w-full h-full ">
                <Nav/>
                
                <Outlet/>

                <footer className="flex justify-center items-center p-5 flex-col gap-3 text-white">
                    <ul className="flex gap-4">
                        <li className="hover:bg-gray-100 hover:bg-opacity-20 rounded-lg p-1">
                            <a href="https://www.instagram.com/aristoteles269/">
                                <InstagramLogo size={32} />
                            </a>
                        </li>
                        <li className="hover:bg-gray-100 hover:bg-opacity-20 rounded-lg p-1">
                            <a href="https://www.linkedin.com/in/aristoteles-aleves-de-oliveira-ab8089226/">
                                <LinkedinLogo size={32} />
                            </a>
                        </li>
                        <li className="hover:bg-gray-100 hover:bg-opacity-20 rounded-lg p-1">
                            <a href="https://github.com/AristotelesAlves">
                                <GithubLogo size={32} />
                            </a>
                        </li>
                        <li className="hover:bg-gray-100 hover:bg-opacity-20 rounded-lg p-1">
                            <a href="https://wa.me/+5587981152947">
                                <WhatsappLogo size={32} />
                            </a>
                        </li>
                    </ul>
                    <p>
                        Aristóteles © 2023
                    </p>
                </footer>
            </div>
        </div>
    )
}

export { Home}