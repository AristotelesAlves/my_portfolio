import { Outlet } from "react-router-dom"
import { ArrowDown, GithubLogo, InstagramLogo, LinkedinLogo, Mouse, WhatsappLogo } from "phosphor-react";
import Logoname from "../components/3D/Logoname";
import Terra3D from "../components/3D/Terra3D";
import { Header } from "../components/Header";
import Setup from "../components/3D/Setup";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { ContainerImage } from "../components/ContainerImage";



function Home(){

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            await new Promise(resolve => setTimeout(resolve, 10000));
            setLoading(!loading);
          } catch (error) {
            console.error('Erro ao carregar dados:', error);
          }
        };

        fetchData();
    }, []);

    return(
        <div className=" flex items-center justify-center flex-col ">
            <Header/>
            <div className="w-full mt-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full">
                <Logoname/>
            </div>
            <div>
                <ContainerImage/>
                <ContainerImage/>
                
                <div>   
                    <div className="">
                        <img 
                          src="" 
                          alt=""
                        />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export { Home}