import { Cake, Calendar, InstagramLogo, Link, UserCircle } from 'phosphor-react'
import banner from '../img/db-space-animation.gif'


export function Header(){
    return(
        <header className="w-full h-[400px] bg-banner  bg-cover flex flex-col justify-end">
            <section className="bg-white rounded-t-[100px] flex  flex-col items-center h-[200px] max-md:h-fit max-md:pb-2">
                <div className="-mt-[75px] flex flex-col gap-3">
                    <div className="flex max-md:flex-col max-md:items-center gap-2">
                        <img
                          className="rounded-full w-[150px] shadow-innerShadow border-4 border-gray-300" 
                          src="https://i.pinimg.com/564x/2e/be/8c/2ebe8c261bafb537d8d4ad76cd59b3db.jpg" 
                          alt="" 
                        />
                        <div className="w-full flex flex-col justify-end max-md:text-center pb-1">
                            <h1 className="font-bold text-3xl text-shadow-default">
                                Aristóteles Alves
                            </h1>
                            <p>
                                desenvolvedor full stack
                            </p>
                        </div>
                    </div>
    
      
                    <div className="max-md:text-sm max-md:px-2">
                        <p>Não é a linguagem de programação que define o programador, mas sim sua lógica.</p>
                        <p>Desenvolvedor fullstack. Universitário Unifap-CE. Estudante Rocketseat. Amante da tecnologia</p>
                    </div>
                    <ul className="flex gap-4 text-sm max-md:text-xs  text-gray-800">
                        <li className="flex h-fit items-center gap-1">
                            <UserCircle size={25} />
                            Disponível
                        </li>
                        <li className="flex h-fit items-center gap-1 hover:opacity-50">
                            <Link size={25}/>
                            <a href='https://linke-tree-v2-obhj3ev45-aristoteles-py.vercel.app/'>
                                /Link's
                            </a>
                        </li>
                        <li className="flex h-fit items-center gap-1">
                            <Cake size={25}/>
                            27 Setembro
                        </li>
                        <li className="flex h-fit items-center gap-1">
                            <Calendar size={25}/>
                            Inscreveu-se em jan 2023
                        </li>
                    </ul>
                </div>
            </section>
        </header>
    )
}