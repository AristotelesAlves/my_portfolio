import { Cards, GithubLogo, InstagramLogo, LinkedinLogo, PaperPlaneTilt, WhatsappLogo } from "phosphor-react";
import NavBar from "../components/layout/nav-bar";
import Skills from "../components/ui/skills";

export function Home() {
  return (
    <body className="w-full bg-[#1C1C1C] relative flex flex-col items-center justify-center scroll-smooth">
      <NavBar />
      <div id="#sobre" className="h-screen w-full relative flex flex-col">
        <section className="h-full flex flex-col items-center justify-center pb-20">
          <div className="flex flex-col gap-2 items-start">
            <div className="text-white flex gap-10 md:flex-row flex-col justify-center items-center w-fit">
              <img
                className="w-36 h-36 rounded-full shadow-lg z-20"
                src="https://avatars.githubusercontent.com/u/103201579?v=4"
                alt="foto de perfil"
              />
              <div className="flex flex-col">
                <h2 className="text-4xl w-full md:text-start text-center">
                  Olá, eu me chamo 
                  <span className="text-green-400 font-semibold">
                    Aristóteles
                  </span>
                  ✨
                </h2>
                <h2 className="text-4xl w-full md:text-start text-center">
                  Um 
                  <span className="text-green-400 font-semibold">
                    desenvolvedor de software
                  </span>
                </h2>
              </div>
            </div>
            <div className="md:px-0 px-3 z-20">
              <p className="text-gray-300  w-full md:text-start md:text-base text-sm text-center">
                Me chamo Aristóteles, mas, em vez de buscar a essência do ser,
                busco a melhor solução para cada problema.
              </p>
              <p className="text-gray-300  w-full md:text-start md:text-base text-sm text-center">
                Apaixonado por tecnologia e inovação, estou sempre explorando
                novas ideias e desafios.
              </p>
              <p className="text-gray-300  w-full md:text-start md:text-base text-sm text-center">
                Atualmente, curso Sistemas de Informação na{" "}
                <a className="text-green-400" href="https://unifapce.edu.br/">
                  UNIFAPCE
                </a>{" "}
                e sigo aprendendo para evoluir e contribuir no mundo da
                tecnologia.
              </p>
            </div>
            <div className="flex md:justify-start justify-center w-full gap-4 py-2 z-20">
              <a
                href="#contato"
                className="p-2 border flex items-center gap-1 border-green-400 hover:bg-green-400 font-semibold transition-colors duration-150 rounded-lg text-white"
              >
                <PaperPlaneTilt size={23} />
                <span>Entre em contato</span>
              </a>
              <a
                href="#projetos"
                className="p-2 border flex items-center gap-1 border-green-400 hover:bg-green-400 font-semibold transition-colors duration-150 rounded-lg text-white"
              >
                <Cards size={23} />
                <span>Meus projetos</span>
              </a>
            </div>
          </div>
        </section>
        <img
          className="w-full h-full object-cover absolute left-0 top-0 z-0"
          src="/grid.svg"
          alt=""
        />
      </div>
      <div id="habilidades" className="h-full w-full pt-20">
        <div className="w-full text-center">
          <h1 className="text-4xl font-semibold text-white">Habilidades</h1>
          <p className="text-gray-400 ">
            Algumas das minhas habilidades como desenvolvedor, mas sempre aberto
            a novos desafios e aprendizados!
          </p>
        </div>
        <Skills />
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
            <WhatsappLogo size={30}/>
          </a>
          <a className="p-2 rounded-xl hover:bg-green-600 transition-colors duration-200" href="https://www.instagram.com/aristoteles269/">
            <InstagramLogo size={30}/>
          </a>
          <a className="p-2 rounded-xl hover:bg-green-600 transition-colors duration-200" href="https://www.linkedin.com/in/aristoteles-alves-ab8089226/">
            <LinkedinLogo size={30}/>
          </a>
          <a className="p-2 rounded-xl hover:bg-green-600 transition-colors duration-200" href="https://github.com/AristotelesAlves">
            <GithubLogo size={30}/>
          </a>
        </div>

        </div>
    </body>
  );
}
