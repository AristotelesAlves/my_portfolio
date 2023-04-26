import { Link } from "react-router-dom";

export function Nav(){
    return (
        <nav className="w-[900px] py-2 bg-black text-white mt-4">
            <ul className="flex gap-20 justify-center font-semibold text-lg">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/visita">Visita</Link></li>
            </ul>
        </nav>
    )
}