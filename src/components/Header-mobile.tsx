export function Header() {
    return (
        <header className="w-full sticky top-4 left-0 items-center justify-center z-50 md:hidden flex">
            <ul className="flex flex-col px-10 py-4 bg-black/50 backdrop-blur-md border-2 rounded-2xl border-[#303030] text-white gap-10">
                <li className="h-fit w-fit relative flex flex-col group">
                    <a className="px-4 py-0" href="#home">
                        Inicio
                    </a>
                    <div className="h-[1px] rounded-full shadow-md shadow-green-400 w-0 bg-green-300 group-hover:w-full transition-all duration-200"></div>
                </li>
                <li className="h-fit w-fit relative flex flex-col group">
                    <a className="px-4 py-0" href="#about">
                        Sobre
                    </a>
                    <div className="h-[1px] rounded-full shadow-md shadow-green-400 w-0 bg-green-300 group-hover:w-full transition-all duration-200"></div>
                </li>
                <li className="h-fit w-fit relative flex flex-col group">
                    <a className="px-4 py-0" href="#skills">
                        Habilidades
                    </a>
                    <div className="h-[1px] rounded-full shadow-md shadow-green-400 w-0 bg-green-300 group-hover:w-full transition-all duration-200"></div>
                </li>
                <li className="h-fit w-fit relative flex flex-col group">
                    <a className="px-4 py-0" href="#projects">
                        Projetos
                    </a>
                    <div className="h-[1px] rounded-full shadow-md shadow-green-400 w-0 bg-green-300 group-hover:w-full transition-all duration-200"></div>
                </li>
                <li className="h-fit w-fit relative flex flex-col group">
                    <a className="px-4 py-0" href="#contact">
                        Contato
                    </a>
                    <div className="h-[1px] rounded-full shadow-md shadow-green-400 w-0 bg-green-300 group-hover:w-full transition-all duration-200"></div>
                </li>
            </ul>
        </header>
    )
}
