import logo from './mac.svg'

export function ContainerImage(){
    return (
        <div className='flex'>
            <img className='' src={logo} alt="" />
            <div className='w-full flex-1 pr-14 pt-10 flex flex-col gap-2'>
                <h1 className='font-bold text-2xl'>
                    Dowhile 2021
                </h1>
                <p>
                    Projeto desenvolvivo junto com a Rocketseat. Botando em pratica habilidades de desnvolvimento web.
                </p>
                <p>
                    Gostou do projeto ? Você pode da uma olhada na DEMO do projeto ou se preferir pode navegar pelo diretorio do projeto no meu GitHub
                </p>
                <h2>
                    Ferramentas:
                </h2>
                <ul>
                    <ul className='flex items-center gap-2 flex-wrap w-full'>
                        <li className='py-1 px-2 rounded-md bg-sky-700 align-top drop-shadow-lg text-white'>
                            React.js
                        </li>
                        <li className='py-1 px-2 rounded-md bg-sky-700 align-top drop-shadow-lg text-white'>
                            TailwindCSS
                        </li>
                        <li className='py-1 px-2 rounded-md bg-sky-700 align-top drop-shadow-lg text-white'>
                            Node
                        </li>
                        <li className='py-1 px-2 rounded-md bg-sky-700 align-top drop-shadow-lg text-white'>
                            Express
                        </li>
                        <li className='py-1 px-2 rounded-md bg-sky-700 align-top drop-shadow-lg text-white'>
                            Sockt.io
                        </li>
                        <li className='py-1 px-2 rounded-md bg-sky-700 align-top drop-shadow-lg text-white'>
                            Prisma.io
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}