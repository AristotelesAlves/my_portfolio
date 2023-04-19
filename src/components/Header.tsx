import { Cake, Calendar, InstagramLogo, Link, UserCircle } from 'phosphor-react'

export function Header(){
    return(
        <header className="w-[900px]">
            <div className="flex">
                <div className="absolute z-0">
                <img
                 className="w-[900px] h-[300px]"
                 src="https://i.pinimg.com/originals/15/e7/e3/15e7e300166c962d3b8a22f60b5cac9e.gif" 
                 alt="" 
                />
                </div>
                <div className="z-10 mt-[220px] ml-10 flex w-full">
                    <img 
                     className="rounded-full w-36 h-36 border-[5px] border-black"
                     src="https://avatars.githubusercontent.com/u/103201579?v=4" 
                     alt=""
                    />
                    <div className="flex items-end mb-2 justify-end mr-10 w-full">
                        <p className="bg-black px-3 py-2 rounded-xl font-medium flex items-center gap-1 text-white">
                           <InstagramLogo size={20} /> Siga-me
                        </p>
                    </div>
                </div>
            </div>

            <div className="ml-10 w-full">
                <h1 className="my-2 text-3xl font-semibold">
                    Aristóteles Alves
                </h1>
                <p>
                    Não é a linguagem de programação que define o programador, mas sim sua lógica.
                </p>
                <p className="mt-2">
                    Desenvolvedor fullstack. Universitário Unifap-CE. Estudante Rocketseat. Amante da tecnologia
                </p>

                <ul className="flex gap-7 mt-4">
                    <li className="flex gap-1 items-center"><UserCircle size={32} />Disponível</li>
                    <li className="flex gap-1 items-center"><Link size={32} />/Links</li>
                    <li className="flex gap-1 items-center"><Cake size={32} />27 Setembro</li>
                    <li className="flex gap-1 items-center"><Calendar size={32} />Inscreveu-se em Jan 2023</li>
                </ul>
            </div>

        </header>
    )
}