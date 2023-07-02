import { Cake, Calendar, InstagramLogo, Link, UserCircle } from 'phosphor-react'
import banner from '../img/db-space-animation.gif'


export function Header(){
    return(
        <header className="w-full h-[400px] bg-banner  bg-cover flex flex-col justify-end">
            <section className="bg-white rounded-t-[100px] max-md:rounded-t-[80px] flex  flex-col items-center h-[200px] max-md:h-fit max-md:pb-2">
                <div className="-mt-[75px] flex flex-col gap-3">
                    <div className="flex max-md:flex-col max-md:items-center gap-2">
                        <img
                          className="rounded-full w-[150px] shadow-innerShadow border-4 border-gray-300" 
                          src="https://i.pinimg.com/564x/93/a0/dd/93a0dd47cab45363ef2a0a697c4d9538.jpg" 
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
    
      
                    <div className="max-md:text-sm max-md:px-4">
                        <p>Não é a linguagem de programação que define o programador, mas sim sua lógica.</p>
                        <p className="max-sm:text-[10px] max-md:mt-1">
                            Desenvolvedor fullstack. Universitário Unifap-CE. Estudante Rocketseat.
                        </p>
                    </div>
                    <ul className="flex gap-4 text-sm max-md:text-xs max-md:font-light max-md:mb-1 max-md:px-4  ">
                        <li className="flex h-fit items-center gap-1">
                            <UserCircle size={25} />
                            Disponível
                        </li>
                        <li className="flex h-fit items-center gap-1 hover:opacity-50">
                            <Link size={25} color="#201D3A"/>
                            <a href='https://linke-tree-v2-obhj3ev45-aristoteles-py.vercel.app/'>
                                /Link's
                            </a>
                        </li>
                        <li className="flex h-fit items-center gap-1">
                            <Cake size={25}/>
                            27 Setembro
                        </li>
                        {/* <li className="flex h-fit items-center gap-1">
                            <Calendar size={25}/>
                            Inscreveu-se em jan 2023
                        </li> */}
                    </ul>
                </div>
            </section>
        </header>
    )
}