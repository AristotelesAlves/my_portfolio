import { Download, DownloadSimple } from "phosphor-react"
import curriculo from '../pdf/Curriculo - Aristóteles Alves.pdf'

function Sobre(){
    return(
        <section className="w-full mt-2 flex flex-col gap-5 items-center py-2 px-6">
            <div className="bg-white rounded-xl p-5 shadow-innerShadow gap-6 w-full flex justify-center">
                <div className="flex flex-col gap-2 flex-1 items-center">
                    <strong className="text-xl max-md:text-base">
                        Olá, eu me chamo Aristóteles Alves 
                    </strong>
                    <p className="max-md:text-sm text-center">
                        Eu tenho 20 anos, comecei no mundo da programação em 2020, com o curso em vídeo do Gustavo Guanabara, onde ele ensinava Python. Devido ao meu financeiro, saí pelo mundão para trabalhar como mecânico montador para a Construcap em 2021. Depois de um ano de muito trabalho, ingressei no mundo universitário na instituição Centro Universitário Paraíso em Juazeiro do Norte, Ceará
                    </p>
                    <div className="max-md:w-full text-center mt-2">
                        <strong className="text-lg max-md:text-base max-md:text-center">
                            Minhas habilidades são, mas não se limitam:
                        </strong>
                        <ul className="flex gap-3 flex-wrap mt-1 pr-2 max-md:text-sm max-md:justify-center">
                            <li className="px-1 border-b-2 border-roxoPR shadow-buttonShadow ">
                                HTML 5
                            </li>
                            <li className="px-1 border-b-2 border-roxoPR shadow-buttonShadow ">
                                CSS 3
                            </li>
                            <li className="px-1 border-b-2 border-roxoPR shadow-buttonShadow ">
                                JavaScript
                            </li>
                            <li className="px-1 border-b-2 border-roxoPR shadow-buttonShadow ">
                                TypeScript
                            </li>
                            <li className="px-1 border-b-2 border-roxoPR shadow-buttonShadow ">
                                React
                            </li>
                            <li className="px-1 border-b-2 border-roxoPR shadow-buttonShadow ">
                                TailwindCSS
                            </li>
                            <li className="px-1 border-b-2 border-roxoPR shadow-buttonShadow ">
                                Node.js
                            </li>
                            <li className="px-1 border-b-2 border-roxoPR shadow-buttonShadow ">
                                Express
                            </li>
                            <li className="px-1 border-b-2 border-roxoPR shadow-buttonShadow ">
                                SQLite
                            </li>
                            <li className="px-1 border-b-2 border-roxoPR shadow-buttonShadow ">
                                PostgresQL
                            </li>
                            <li className="px-1 border-b-2 border-roxoPR shadow-buttonShadow ">
                                GraphQL
                            </li>
                            <li className="px-1 border-b-2 border-roxoPR shadow-buttonShadow ">
                                Apollo
                            </li>
                            <li className="px-1 border-b-2 border-roxoPR shadow-buttonShadow ">
                                Prisma.io
                            </li>
                        </ul>
                    </div>
                   <div className="w-full justify-center flex mt-3">
                        <a 
                           className="bg-roxoPR w-fit px-4 py-2 mt-2 rounded-lg text-white shadow-xl flex items-center gap-2 hover:opacity-90"
                           href={curriculo} download>
                             Meu curriculo
                             <DownloadSimple/>
                         </a>
                   </div>
                </div>
            </div>
        </section>
    )
}
export { Sobre }