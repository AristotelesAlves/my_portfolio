import { Cake, Calendar, InstagramLogo, Link, UserCircle } from 'phosphor-react'
import banner from '../img/db-space-animation.gif'


export function Header(){
    return(
        <header className="w-full h-[400px] bg-banner  bg-cover flex flex-col justify-end">
            <section className="bg-white rounded-t-[100px] flex  flex-col items-center h-[200px]">
                <div className="-mt-[75px] flex flex-col gap-3">
                    <div className="flex gap-2">
                        <img
                          className="rounded-full w-[150px] shadow-innerShadow border-4 border-gray-300" 
                          src="https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.6435-9/147433312_2802841209937743_5338152885317310999_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFVx__5GZCbqXcRrJK8Ie2nPERwjPgbBQE8RHCM-BsFAS_LOYekjtvt5ZmQo23Gkkut_lELvJuNDYVBB12uByvz&_nc_ohc=BJWl6RQNRL0AX-PMXEq&_nc_ht=scontent.fjdo10-1.fna&oh=00_AfBRCBJf3FpaWMBMBQS68LiUTA22uLsStSZ9NgZQJ2o-GQ&oe=649853E9" 
                          alt="" 
                        />
                        <div className="w-full flex flex-col justify-end pb-1">
                            <h1 className="font-bold text-3xl text-shadow-default">
                                Aristóteles Alves
                            </h1>
                            <p>
                                desenvolvedor full stack
                            </p>
                        </div>
                    </div>
    
      
                    <div>
                        <p>Não é a linguagem de programação que define o programador, mas sim sua lógica.</p>
                        <p>Desenvolvedor fullstack. Universitário Unifap-CE. Estudante Rocketseat. Amante da tecnologia</p>
                    </div>
                    <ul className="flex gap-4">
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