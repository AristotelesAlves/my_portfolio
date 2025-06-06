import { MenuIcon, X } from "lucide-react";
import { useState } from "react";


export function Header() {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <header className="w-full md:sticky relative md:top-4 top-0 left-0 flex items-center md:justify-center z-50 ">

            <div className="text-white flex items-center justify-between p-4 border-b-2 border-[#303030] w-full md:hidden fixed top-0 left-0 bg-black/50 backdrop-blur-md">
                <h1 className="text-2xl">
                    Aristóteles Alves
                </h1>
                <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                    {isOpenMenu ? (<X size={30} />) : (<MenuIcon size={30} />)}
                </button>
            </div>

            <ul className={`md:flex-row flex md:absolute fixed top-0 transition-all duration-300 ${isOpenMenu ? 'md:left-auto left-0' : 'md:left-auto -left-[999px]'} md:h-fit md:w-fit w-[70%]  h-full flex-col px-10 py-4 bg-black/50 backdrop-blur-md border-2 md:rounded-2xl rounded-r-2xl  border-[#303030] text-white md:gap-10 gap-5`}>
             <li className="h-fit w-fit relative flex flex-col group">
                 <a onClick={() => setIsOpenMenu(!isOpenMenu)} className="px-4 py-0" href="#home">
                     Inicio
                 </a>
                 <div className="h-[1px] rounded-full shadow-md shadow-green-400 w-0 bg-green-300 group-hover:w-full transition-all duration-200"></div>
             </li>
             <li className="h-fit w-fit relative flex flex-col group">
                 <a onClick={() => setIsOpenMenu(!isOpenMenu)} className="px-4 py-0" href="#about">
                     Sobre
                 </a>
                 <div className="h-[1px] rounded-full shadow-md shadow-green-400 w-0 bg-green-300 group-hover:w-full transition-all duration-200"></div>
             </li>
             <li className="h-fit w-fit relative flex flex-col group">
                 <a onClick={() => setIsOpenMenu(!isOpenMenu)} className="px-4 py-0" href="#skills">
                     Habilidades
                 </a>
                 <div className="h-[1px] rounded-full shadow-md shadow-green-400 w-0 bg-green-300 group-hover:w-full transition-all duration-200"></div>
             </li>
             <li className="h-fit w-fit relative flex flex-col group">
                 <a onClick={() => setIsOpenMenu(!isOpenMenu)} className="px-4 py-0" href="#projects">
                     Projetos
                 </a>
                 <div className="h-[1px] rounded-full shadow-md shadow-green-400 w-0 bg-green-300 group-hover:w-full transition-all duration-200"></div>
             </li>
             <li className="h-fit w-fit relative flex flex-col group">
                 <a onClick={() => setIsOpenMenu(!isOpenMenu)} className="px-4 py-0" href="#contact">
                     Contato
                 </a>
                 <div className="h-[1px] rounded-full shadow-md shadow-green-400 w-0 bg-green-300 group-hover:w-full transition-all duration-200"></div>
             </li>
         </ul>

        </header>
    )
}
