import { Link } from "react-router-dom";

export function Nav(){
    return (
        <nav className="w-full mt-4">
            <ul className="flex justify-center items-center gap-24 h-[50px] bg-white w-[50%] m-auto rounded-2xl shadow-innerShadow">
                <li>
                    <Link to="/">
                        Projetos
                    </Link>
                </li>
                <li>
                    <Link to="/sobre">
                        Sobre
                        </Link>
                </li>
                <li>
                    <Link to="/visita">
                        Visita
                    </Link>
                </li>
            </ul>
        </nav>
    )
}