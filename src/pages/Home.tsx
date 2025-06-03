import { Cards, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import { Header } from "../components/Header";
import { ArrowDown } from "lucide-react";

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

      <section id="about" className="h-screen w-full">
        <div className="">
          <h1>

          </h1>
        </div>
        {/* image */}
        <div>

        </div>
        <div>

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
