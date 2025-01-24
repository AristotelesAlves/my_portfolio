export function Home(){
    return(
        <div className=" w-full bg-[#1C1C1C]">
            <header className="p-3 bg-black bg-opacity-40 backdrop-blur-md sticky top-0 left-0 flex items-center justify-between px-10">
              <h1 className="font-semibold text-white text-lg">
                Aristóteles Alves
              </h1>
              <nav>
                <ul className="flex gap-3 items-center text-white ">
                  <li className="hover:text-[#53A7A7] transition-colors duration-100 border-b border-transparent hover:border-[#53A7A7]">
                    <a href="#inicio">Início</a>
                  </li>
                  <li className="hover:text-[#53A7A7] transition-colors duration-100 border-b border-transparent hover:border-[#53A7A7]">
                    <a href="#sobre">Sobre</a>
                  </li>
                  <li className="hover:text-[#53A7A7] transition-colors duration-100 border-b border-transparent hover:border-[#53A7A7]">
                    <a href="#projetos">Projetos</a>
                  </li>
                  <li className="hover:text-[#53A7A7] transition-colors duration-100 border-b border-transparent hover:border-[#53A7A7]">
                    <a href="#contato">Contato</a>
                  </li>
                </ul>
              </nav>
            </header>
            <section className="flex p-10 items-center h-screen text-white relative">
              <div className="w-96 h-96 rounded-full absolute bg-opacity-10 bg-[#53A7A7] blur-3xl "></div>
              <div>
                <div className="flex gap-2 items-center h-fit text-[#53A7A7]">
                  <hr className="w-14 border-2 border-[#53A7A7] mt-1"/>
                  <p className="text-2xl text-center ">
                    Introdução
                  </p>
                </div>
                <p className="text-xl">
                  Transformo suas ideias 
                  em experiências digitais inovadoras.
                </p>
                <p className="text-lg text-gray-400">
                  Vamos construir algo incrível juntos!
                </p>
                <div className="flex items-center gap-2">
                <button className="p-2 font-semibold shadow-md hover:bg-opacity-80 transition-colors duration-150 border-2 border-[#53A7A7] hover:bg-[#53A7A7] bg-opacity-50 rounded-lg">
                    Quem é Aristóteles ?
                  </button>
                  <button className="p-2 font-semibold shadow-md hover:bg-opacity-80 transition-colors duration-150 border-2 border-[#53A7A7] bg-[#53A7A7] rounded-lg">
                    Vamos conversar ?
                  </button>
                </div>
              </div>
            </section>
        </div>
    )
}