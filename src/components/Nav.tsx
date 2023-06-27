
import { Link } from "react-router-dom";

export function Nav(){

    return (
        <nav className="w-full mt-4">
            <ul className="flex justify-center items-center gap-28 max-md:gap-14 h-[50px] bg-white w-[50%] m-auto rounded-2xl shadow-innerShadow max-md:w-[90%]">
                <li className="hover:opacity-90 active:opacity-80">
                    <Link to="/">
                        Projetos
                    </Link>
                </li>
                <li className="hover:opacity-90 active:opacity-80">
                    <Link to="/sobre">
                        Sobre
                        </Link>
                </li>
                <li className="hover:opacity-90 active:opacity-80">
                    <Link to="/visita">
                        Visita
                    </Link>
                </li>
            </ul>
        </nav>
    )
}