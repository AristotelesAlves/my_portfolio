import { Outlet } from "react-router-dom"
import { GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import Logoname from "../components/3D/Logoname";
import Terra3D from "../components/3D/Terra3D";
import { Header } from "../components/Header";
import Setup from "../components/3D/Setup";



function Home(){

    return(
        <div className="bg-zinc-800 w-full flex items-center justify-center flex-col ">
            <Header/>
            <div className="h-screen -mt-11 w-full flex items-center justify-center flex-col ">
                <div>
                    <Logoname/>
                </div>
            </div>
            <div className="h-screen w-full flex items-center justify-center flex-col ">
                <div>
                    <Terra3D/>
                </div>
                <div>

                </div>
            </div>
            <div className="h-screen w-full flex items-center justify-center flex-col ">
                <div>
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
                <div>
                    <Setup/>
                </div>
            </div>
        </div>
    )
}

export { Home}