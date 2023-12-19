import { Outlet } from "react-router-dom"
import { ArrowDown, GithubLogo, InstagramLogo, LinkedinLogo, Mouse, WhatsappLogo } from "phosphor-react";
import Logoname from "../components/3D/Logoname";
import Terra3D from "../components/3D/Terra3D";
import { Header } from "../components/Header";
import Setup from "../components/3D/Setup";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";



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
        <div className="bg-zinc-800 w-full flex items-center justify-center flex-col ">
            <Header/>
            {loading == true ? <Loading/> : null}

            <div className="h-screen -mt-11 w-full flex items-center justify-center flex-col gap-10 ">
                <div>
                    <Logoname/>
                </div>
                <div className="animate-bounce text-white bottom-10 right-10 z-10 fixed">
                    <ArrowDown size={35}/>
                </div>
            </div>
            <div className="h-screen w-full flex items-center justify-center ">
                <div>
                    <Setup/>
                </div>
                <div className="text-white">
                    <h1>Uma representação em miniatuara do meu setup</h1>
                    <div>
                        <h2>Meu PC principal:</h2>
                        <p>
                            Monitor 29" ultrawide LG
                        </p>
                        <p>
                            Gabinete Redragon
                        </p>
                        <p>
                            Placa mãe
                        </p>
                    </div>
                </div>
                <Terra3D/>
            </div>
        </div>
    )
}

export { Home}