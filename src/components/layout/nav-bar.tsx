import { List, X } from "phosphor-react";
import { useState } from "react";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="p-5 flex w-full items-center justify-between sticky top-0 left-0 bg-black bg-opacity-5 backdrop-blur-lg z-50">
      <h1 className="flex items-center gap-1 text-2xl font-semibold text-white z-50">
        <span className="text-3xl text-green-600 ">&lt;</span>
        Aristóteles Alves
        <span className="text-3xl text-green-600">&#47;&gt;</span>
      </h1>
      <nav className="md:block hidden">
        <ul className="flex text-white items-center gap-5">
          <li className="text-lg font-semibold border-b border-transparent hover:border-green-400 hover:text-green-400 transition-colors duration-150">
            <a hrefLang="/" href="">
              Sobre
            </a>
          </li>
          <li className="text-lg font-semibold border-b border-transparent hover:border-green-400 hover:text-green-400 transition-colors duration-150">
            <a hrefLang="/" href="">
              Habilidades
            </a>
          </li>
          <li className="text-lg font-semibold border-b border-transparent hover:border-green-400 hover:text-green-400 transition-colors duration-150">
            <a hrefLang="/" href="">
              Projetos
            </a>
          </li>
          <li className="text-lg font-semibold border-b border-transparent hover:border-green-400 hover:text-green-400 transition-colors duration-150">
            <a hrefLang="/" href="">
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="block md:hidden text-white z-50"
      >
        {openMenu ? (
          <X size={30} />
        ) : (
          <List size={30} />
        )}
      </button>
      <div
        className={`fixed ${
          openMenu ? "left-0" : "-left-[999px] "
        } transition-all duration-200 top-0 h-screen w-full backdrop-blur-md bg-black bg-opacity-90 z-40`}
      >
        <ul className="flex text-white items-center flex-col justify-center w-full h-full gap-5">
          <li className="text-2xl font-semibold border-b border-transparent hover:border-green-400 hover:text-green-400 transition-colors duration-150">
            <a hrefLang="/" href="">
              Sobre
            </a>
          </li>
          <li className="text-2xl font-semibold border-b border-transparent hover:border-green-400 hover:text-green-400 transition-colors duration-150">
            <a hrefLang="/" href="">
              Habilidades
            </a>
          </li>
          <li className="text-2xl font-semibold border-b border-transparent hover:border-green-400 hover:text-green-400 transition-colors duration-150">
            <a hrefLang="/" href="">
              Projetos
            </a>
          </li>
          <li className="text-2xl font-semibold border-b border-transparent hover:border-green-400 hover:text-green-400 transition-colors duration-150">
            <a hrefLang="/" href="">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
