import { Cards, List, PaperPlaneTilt } from "phosphor-react";

export function Home() {


  function alert(){
    window.alert('Ai você ta querendo de mais!')
  }

  return (
    <div className="w-full bg-[#1C1C1C] relative flex flex-col">
      <div className="h-screen w-full relative flex flex-col">
        <header className="p-5 z-20 flex w-full items-center justify-between relative">
          <h1 className="flex items-center gap-1 text-2xl font-semibold text-white">
            <span className="text-3xl text-green-600">
              &lt;
            </span>
            Aristóteles Alves
            <span className="text-3xl text-green-600">
              &#47;&gt;
            </span>
          </h1>
          <nav className="md:block hidden">
            <ul className="flex text-white items-center gap-5">
              <li className="text-lg font-semibold border-b border-transparent hover:border-green-400 hover:text-green-400 transition-colors duration-150">
                <a onClick={alert} href="">
                  Sobre
                </a>
              </li>
              <li className="text-lg font-semibold border-b border-transparent hover:border-green-400 hover:text-green-400 transition-colors duration-150">
                <a onClick={alert} href="">
                  Habilidades
                </a>
              </li>
              <li className="text-lg font-semibold border-b border-transparent hover:border-green-400 hover:text-green-400 transition-colors duration-150">
                <a onClick={alert} href="">
                  Projetos
                </a>
              </li>
              <li className="text-lg font-semibold border-b border-transparent hover:border-green-400 hover:text-green-400 transition-colors duration-150">
                <a onClick={alert} href="">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <button className="block md:hidden text-white">
            <List size={30}/>
          </button>
        </header>
        <section className="h-full flex flex-col items-center justify-center pb-20">
          <div className="flex flex-col gap-2 items-start">  
            <div className="text-white flex gap-10 md:flex-row flex-col justify-center items-center w-fit">
              <img 
              className="w-36 h-36 rounded-full shadow-lg z-20"
              src="https://i.pinimg.com/736x/ea/26/12/ea26123465f954e0aa06484e158e9baf.jpg" 
              alt="foto de perfil" />
              <div className="flex flex-col">
                <h2 className="text-4xl w-full md:text-start text-center">
                  Olá, eu me chamo <span className="text-green-400 font-semibold">Aristóteles</span>✨
                </h2>
                <h2 className="text-4xl w-full md:text-start text-center">
                  Um <span className="text-green-400 font-semibold">desenvolvedor de software</span>
                </h2>
              </div>
            </div>
            <div className="md:px-0 px-3">
              <p className="text-gray-300  w-full md:text-start md:text-base text-sm text-center">
                Um desenvolvedor fullstack com foco em criar soluções eficientes e funcionais.
              </p>
              <p className="text-gray-300  w-full md:text-start md:text-base text-sm text-center">
                Sou movido pela paixão de transformar ideias em projetos concretos, 
              </p>
              <p className="text-gray-300  w-full md:text-start md:text-base text-sm text-center">
                sempre buscando unir inovação e desempenho.
              </p>
            </div>
            <div className="flex md:justify-start justify-center w-full gap-4 py-2 z-20">
              <button onClick={alert} className="p-2 border flex items-center gap-1 border-green-400 hover:bg-green-400 font-semibold transition-colors duration-150 rounded-lg text-white">
                <PaperPlaneTilt size={23}/>
                <span>
                  Entre em contato
                </span>
              </button>
              <button onClick={alert} className="p-2 border flex items-center gap-1 border-green-400 hover:bg-green-400 font-semibold transition-colors duration-150 rounded-lg text-white">
                <Cards size={23}/>
                <span>
                  Meus projetos
                </span>
              </button>
            </div>
          </div>
        </section>
        <img className="w-full h-full object-cover absolute left-0 top-0 z-0" src="/grid.svg" alt="" />
      </div>
      <div className="h-screen w-full ">
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="text-4xl font-semibold text-white">
            Projetos
          </h1>
          <p className="text-gray-400 ">
            Aqui você encontrará uma seleção de projetos nos quais trabalhei e participei.
          </p>
        </div>
        <div className="flex justify-center w-full items-center py-2 flex-wrap gap-4">
          <div className="w-80 h-80 relative group rounded-lg overflow-hidden">
            <div className="absolute hidden group-hover:flex transition-colors duration-300 w-80 h-80 bottom-0 left-0 bg-black bg-opacity-50 z-20 justify-end flex-col text-white p-2 gap-2">
              <div>
                <h2 className="font-semibold">
                  Projeto
                </h2>
                <p className="text-sm text-gray-400">
                  Projeto em desenvolvimento
                </p>
              </div>
              <ul className="flex gap-1 items-center">
                <li className="p-1 rounded-md border border-green-400 text-sm font-semibold">
                  JavaScript
                </li>
                <li className="p-1 rounded-md border border-green-400 text-sm font-semibold">
                  HTML
                </li>
              </ul>
            </div>
            <img className="w-80 h-80 z-0 transition-transform duration-500 group-hover:scale-110" src="https://i.pinimg.com/736x/e7/26/e9/e726e930555b7c5160fc7729df765bc4.jpg" alt="" />
          </div>


          <div className="w-80 h-80 relative group rounded-lg overflow-hidden">
            <div className="absolute hidden group-hover:flex transition-colors duration-300 w-80 h-80 bottom-0 left-0 bg-black bg-opacity-50 z-20 justify-end flex-col text-white p-2 gap-2">
              <div>
                <h2 className="font-semibold">
                  Projeto
                </h2>
                <p className="text-sm text-gray-400">
                  Projeto em desenvolvimento
                </p>
              </div>
              <ul className="flex gap-1 items-center">
                <li className="p-1 rounded-md border border-green-400 text-sm font-semibold">
                  JavaScript
                </li>
                <li className="p-1 rounded-md border border-green-400 text-sm font-semibold">
                  HTML
                </li>
              </ul>
            </div>
            <img className="w-80 h-80 z-0 transition-transform duration-500 group-hover:scale-110" src="https://i.pinimg.com/736x/e7/26/e9/e726e930555b7c5160fc7729df765bc4.jpg" alt="" />
          </div>

          <div className="w-80 h-80 relative group rounded-lg overflow-hidden">
            <div className="absolute hidden group-hover:flex transition-colors duration-300 w-80 h-80 bottom-0 left-0 bg-black bg-opacity-50 z-20 justify-end flex-col text-white p-2 gap-2">
              <div>
                <h2 className="font-semibold">
                  Projeto
                </h2>
                <p className="text-sm text-gray-400">
                  Projeto em desenvolvimento
                </p>
              </div>
              <ul className="flex gap-1 items-center">
                <li className="p-1 rounded-md border border-green-400 text-sm font-semibold">
                  JavaScript
                </li>
                <li className="p-1 rounded-md border border-green-400 text-sm font-semibold">
                  HTML
                </li>
              </ul>
            </div>
            <img className="w-80 h-80 z-0 transition-transform duration-500 group-hover:scale-110" src="https://i.pinimg.com/736x/e7/26/e9/e726e930555b7c5160fc7729df765bc4.jpg" alt="" />
          </div>

          <div className="w-80 h-80 relative group rounded-lg overflow-hidden">
            <div className="absolute hidden group-hover:flex transition-colors duration-300 w-80 h-80 bottom-0 left-0 bg-black bg-opacity-50 z-20 justify-end flex-col text-white p-2 gap-2">
              <div>
                <h2 className="font-semibold">
                  Projeto
                </h2>
                <p className="text-sm text-gray-400">
                  Projeto em desenvolvimento
                </p>
              </div>
              <ul className="flex gap-1 items-center">
                <li className="p-1 rounded-md border border-green-400 text-sm font-semibold">
                  JavaScript
                </li>
                <li className="p-1 rounded-md border border-green-400 text-sm font-semibold">
                  HTML
                </li>
              </ul>
            </div>
            <img className="w-80 h-80 z-0 transition-transform duration-500 group-hover:scale-110" src="https://i.pinimg.com/736x/e7/26/e9/e726e930555b7c5160fc7729df765bc4.jpg" alt="" />
          </div>


        </div>
          <div className="p-2 flex items-end justify-center">
            <a href="/projetos"
              className="text-white px-4 py-2 border border-green-400 rounded-lg  font-semibold hover:bg-green-400 hover:scale-110 transition-all duration-500">
              Todos meus projetos
            </a>
          </div>

      </div>

    </div>
  );
}
