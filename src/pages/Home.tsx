
import { Header } from "../components/Header";
import { ArrowDown } from "lucide-react";
import ContributionGrid from "../hooks/use-contribution-graph";

export function Home() {
  return (
    <body className="w-full  bg-black relative flex flex-col items-center justify-center ">
      <Header />
      <section id="home" className="h-screen w-full relative flex flex-col">
        <section className="h-full flex flex-col items-center justify-center pb-20 gap-4 z-40  rounded-full">
          <span className="px-20 py-2 bg-black border-2 border-[#CCCCCC] shadow-md rounded-3xl mb-2 text-[#CCCCCC] z-40">
            Desenvolvimento Web
          </span>
          <div className="z-40">
            <h1 className="text-center text-[#CCCCCC] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight px-2">
              Transformo ideias em
            </h1>
            <h1 className="text-center text-[#CCCCCC] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight px-2">
              experiências digitais incríveis
            </h1>
          </div>
          <p className="text-center text-[#A6A6A6] text-sm sm:text-base md:text-lg max-w-[90vw] sm:max-w-xl mx-auto mt-3 px-2 z-40">
            Olá, meu nome é Aristóteles Alves e sou desenvolvedor Full Stack.
            Explore a página para saber mais sobre minha trajetória e conhecer projetos que tornam ideias realidade.
          </p>
          <div className="flex gap-4 mt-8 z-40">
            <a
              href="#about"
              className="px-10 py-3 bg-black flex items-center justify-center text-[#CCCCCC] hover:text-white hover:border-green-600 border-2 rounded-2xl border-[#303030]  transition-colors gap-2"
            >
              <span>👋</span>
              <p>Quem sou eu</p>
            </a>
            <a
              href="#projects"
              className="px-10 py-3 bg-black flex items-center justify-center text-[#CCCCCC] hover:text-white hover:border-green-600 border-2 rounded-2xl border-[#303030]  transition-colors gap-2"
            >
              <p>Ver Projetos</p>
              <ArrowDown size={20} />
            </a>
          </div>
        </section>
        <img
          className="w-full h-full object-cover absolute left-0 top-0 z-0"
          src="/grid.svg"
          alt=""
        />
      </section>

      <section id="about" className="h-screen w-full flex items-center justify-center text-[#CCCCCC]">

        <div className=" h-full w-full xl-[100%] lg-[100%] xl:w-[90%] 2xl:w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8 auto-rows-min">
          {/* sobre */}
          <div className="md:col-span-2 lg:col-span-2 border-2 border-[#303030] rounded-xl overflow-hidden">
            <div className="h-28 border-b-2 border-[#303030]" style={{
              backgroundImage: 'url(/imgs/header-link-tree.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}></div>
            <div className="flex flex-col gap-2 p-5">
              <h1>
                Olá, eu me chamo Aristóteles Alves, desenvolvedor fullstack.
              </h1>
              <p>
                Apesar do nome, não sou o grande filósofo que você está pensando. Se ele fosse vivo hoje, estaríamos programando em assembly. Brincadeiras à parte, você viu meus projetos? Gostou? Caso tenha algum projeto em mente e não saiba como tirá-lo do papel, entre em contato. Posso te ajudar ou auxiliar!
              </p>
            </div>

          </div>
          {/* imagem */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 flex items-center justify-center border-2 border-[#303030] rounded-xl">
            <img src="/eu.png" alt="" className="h-full  w-auto rounded-lg object-cover" />
          </div>
          {/* horarios */}
          <div className="md:col-span-2 row-span-2 lg:col-span-1 border-2 items-center  border-[#303030] rounded-xl overflow-hidden">
          <div className="flex items-center justify-center w-full h-full flex-col p-4">
          <h2 className="text-center pb-2 font-semibold text-lg">
              Sou flexível na comunicação em diferentes fusos horários
            </h2>
            <div className="flex gap-4 items-center justify-center w-full text-white">
              <div className="px-2 py-1 border-2 border-[#303030] rounded-lg flex items-end gap-1">
                <span className="text-xs">PT</span>
                <span className="text-sm">Portugual</span>
              </div>
              <div className="px-2 py-1 border-2 border-green-600 rounded-lg flex items-end gap-1">
                <span className="text-xs">BR</span>
                <span className="text-sm">Brasil</span>
              </div>
              <div className="px-2 py-1 border-2 border-[#303030] rounded-lg flex items-end gap-1">
                <span className="text-xs">US</span>
                <span className="text-sm">USA</span>
              </div>
            </div>
            <img src="globo.png" alt="" />
            <div className="flex flex-col gap-2 w-full items-start justify-normal text-white">
              <div className="flex items-center gap-1">
                <hr className="w-14 h-1 bg-white" />
                <hr className="w-3 h-1 bg-white" />
                <hr className="w-3 h-1 bg-white" />
              </div>
              <strong className="text-xl">
                BRASIL
              </strong>
              <span>Latitude: -7.23389 </span>
              <span>Longitude: -39.40889</span>
            </div>
              </div>

          </div>
          {/* propaganda */}
          <div className="md:col-span-2 lg:col-span-1 bg-opacity-30 border-2 min-h-[150px] lg:h-full h-[300px] border-[#303030] rounded-xl p-3 relative overflow-hidden"
            style={{
              backgroundImage: 'url(/background.png)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >

            <div className="w-full h-full flex flex-col items-center z-50 justify-center gap-2 bg-black/20" >
              <h2 className="md:text-sm text-center font-semibold ">
                Vamos trabalhar juntos no seu próximo projeto ?
              </h2>
              <a className="px-3 py-1 rounded-xl border-2 bg-black border-[#303030]" href="email:contato@aristoteles.dev.br">contato@aristoteles.dev.br</a>
            </div>
          </div>
          {/* grafico git */}
          <div className="md:col-span-2 lg:col-span-2 border-2 p-2 border-[#303030] rounded-xl">
          <strong className="text-lg font-semibold">
    GitHub - Contribuições
  </strong>
  <div className="p-2">
    <ContributionGrid />
  </div>
  <div className="mt-4">
    <p className="text-sm text-[#A6A6A6]">
      Este gráfico mostra minhas contribuições recentes no GitHub, incluindo commits, pull requests e interações em projetos open-source. Acompanhe meu trabalho e veja como estou ajudando a construir soluções digitais.
    </p>
    <a
      href="https://github.com/aristotelesAlves"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block px-4 py-2 bg-black text-[#CCCCCC] hover:text-white hover:border-green-600 border-2 rounded-xl border-[#303030] transition-colors"
    >
      Visitar meu GitHub
    </a>
  </div>
          </div>
        </div>

      </section>

      <section id="skills" className="h-screen w-full">

      </section>

      <section id="projects" className="h-screen w-full">

      </section>

      <section id="contact" className="h-screen w-full">

      </section>

    </body>
  );
}
