import { Cards, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

export function Home() {
  return (
    <body className="w-full bg-black relative flex flex-col items-center justify-center scroll-smooth">
      <div className="w-full sticky top-4 left-0 flex items-center justify-center z-50">
        <ul className="flex px-10 py-4 bg-black border-zinc-800 border-2 rounded-2xl text-white gap-10">
          <li>
            <a className="px-4 py-2 hover:bg-zinc-800 rounded-full" href="#">
              Inicio
            </a>
          </li>
          <li>
            <a className="px-4 py-2 hover:bg-zinc-800 rounded-full" href="#">
              Sobre
            </a>

          </li>
          <li>
            <a className="px-4 py-2 hover:bg-zinc-800 rounded-full" href="#">
              Habilidades
            </a>

          </li>
          <li>
            <a className="px-4 py-2 hover:bg-zinc-800 rounded-full" href="#">
              Projetos
            </a>

          </li>
        </ul>
      </div>
      <div id="#sobre" className="h-screen w-full relative flex flex-col">
        <section className="h-full flex flex-col items-center justify-center pb-20">
          <h1 className="text-center text-white text-[60px] w-[700px] font-mono">
            Criando experiências web bonitas e funcionais
            Olá, sou Avinash Singh, um desenvolvedor full stack apaixonado por criar aplicativos de alto desempenho, fáceis de usar e escaláveis.
          </h1>
        </section>
        <img
          className="w-full h-full object-cover absolute left-0 top-0 z-0"
          src="/grid.svg"
          alt=""
        />
      </div>

      <div id="projetos" className="w-full pt-20">
        <div className="flex flex-col justify-center items-center gap-20">
          <div className="w-full text-center">
            <h1 className="text-4xl font-semibold text-white">Projetos</h1>
            <p className="text-gray-400 ">
              Aqui você encontrará uma seleção de projetos nos quais trabalhei e
              participei.
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-2 justify-center">
            <div className="text-white bg-black p-1 rounded-xl overflow-hidden flex flex-col items-center justify-center">
              <div className="w-80 h-80 rounded-lg relative group overflow-hidden">
                <img
                  className="z-0"
                  src="https://i.pinimg.com/originals/97/35/82/973582d9b0e0761a1b880edb78b7f4e7.gif"
                  alt=""
                />
              </div>

              <div className="p-2">
                <h2>Nome do projeto</h2>
              </div>
            </div>
            <div className="text-white bg-black p-1 rounded-xl overflow-hidden flex flex-col items-center justify-center">
              <div className="w-80 h-80 rounded-lg relative group overflow-hidden">
                <img
                  className="z-0"
                  src="https://i.pinimg.com/originals/97/35/82/973582d9b0e0761a1b880edb78b7f4e7.gif"
                  alt=""
                />
              </div>

              <div className="p-2">
                <h2>Nome do projeto</h2>
              </div>
            </div>
            <div className="text-white bg-black p-1 rounded-xl overflow-hidden flex flex-col items-center justify-center">
              <div className="w-80 h-80 rounded-lg relative group overflow-hidden">
                <img
                  className="z-0"
                  src="https://i.pinimg.com/originals/97/35/82/973582d9b0e0761a1b880edb78b7f4e7.gif"
                  alt=""
                />
              </div>

              <div className="p-2">
                <h2>Nome do projeto</h2>
              </div>
            </div>
            <div className="text-white bg-black p-1 rounded-xl overflow-hidden flex flex-col items-center justify-center">
              <div className="w-80 h-80 rounded-lg relative group overflow-hidden">
                <img
                  className="z-0"
                  src="https://i.pinimg.com/originals/97/35/82/973582d9b0e0761a1b880edb78b7f4e7.gif"
                  alt=""
                />
              </div>

              <div className="p-2">
                <h2>Nome do projeto</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contato"
        className="h-full w-full text-white flex items-center justify-center flex-col gap-3 py-10">
        <div className="w-full text-center">
          <h1 className="text-4xl font-semibold text-white">Entre em contato</h1>
          <p className="text-gray-400 ">
            Algumas das minhas redes sociais
          </p>
        </div>
        <div className="flex gap-2 ">
          <a className="p-2 rounded-xl hover:bg-green-600 transition-colors duration-200" href="https://api.whatsapp.com/send?phone=5587981152947&text=Olá, tudo bem ? ">
            <WhatsappLogo size={30} />
          </a>
          <a className="p-2 rounded-xl hover:bg-green-600 transition-colors duration-200" href="https://www.instagram.com/aristoteles269/">
            <InstagramLogo size={30} />
          </a>
          <a className="p-2 rounded-xl hover:bg-green-600 transition-colors duration-200" href="https://www.linkedin.com/in/aristoteles-alves-ab8089226/">
            <LinkedinLogo size={30} />
          </a>
          <a className="p-2 rounded-xl hover:bg-green-600 transition-colors duration-200" href="https://github.com/AristotelesAlves">
            <GithubLogo size={30} />
          </a>
        </div>

      </div>
    </body>
  );
}
