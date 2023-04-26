import { Link } from "react-router-dom"
import RIP_404 from '../img/RIP_404.png'
import { ArrowSquareOut, SmileySad } from "phosphor-react"
function ErroPage(){
    return (
        <div className="flex w-full h-screen justify-center items-center gap-20 bg-gray-200">
            <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-bold">
                    Oh não!
                </h1>
                <div className="flex items-center h-fit gap-2">
                    <p className="text-xl font-medium">
                        Parece que esta página não existe.
                    </p>
                    <SmileySad size={25} />
                </div>
                <Link className="flex items-center gap-1 text-red-600 hover:text-red-500 translate" to='/'>
                    Me leve de volta para início
                    <ArrowSquareOut size={20} />
                </Link>
            </div>
            <img src={RIP_404} alt="" />
        </div>
    )
}

export {ErroPage}