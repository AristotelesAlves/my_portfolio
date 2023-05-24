import { Download, DownloadSimple } from "phosphor-react"

function Sobre(){
    return(
        <section className="w-full mt-2 flex flex-col gap-5 items-center py-2 px-6">
            <div className="bg-white rounded-xl p-5 shadow-innerShadow gap-6 w-full flex justify-center">
                <div className="flex flex-col items-center gap-3">
                    <img 
                      className="w-[250px] h-[300px] rounded-lg shadow-xl"
                      src="https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.6435-9/205338746_2893516304203566_1129989364437748139_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGZb5WV9W3zQlxmiLfB42kDy9WUy9ZZVffL1ZTL1llV95tbl301KBVd56LU9EiY7LRlwxQd2lSVpa6Zh-m1r6Sr&_nc_ohc=iq2tSV2UF64AX82BheT&_nc_ht=scontent.fjdo10-2.fna&oh=00_AfDr1LxZQiWDoG-fbvhgixBbjdsB2nrZkO8DXkOQQW1zGw&oe=6495AB42" 
                      alt="" />
                    <a 
                      className="bg-roxoPR px-4 py-2 rounded-lg text-white shadow-xl flex items-center gap-2 hover:opacity-90"
                      href="">
                        Meu curriculo
                        <DownloadSimple/>
                    </a>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <strong className="text-xl">
                        Olá, eu me chamo Aristóteles Alves 
                    </strong>
                    <p className="pr-3">
                        Eu tenho 20 anos, comecei no mundo da programação em 2020, com o curso em vídeo do Gustavo Guanabara, onde ele ensinava Python. Devido ao meu financeiro, saí pelo mundão para trabalhar como mecânico montador para a Construcap em 2021. Depois de um ano de muito trabalho, ingressei no mundo universitário na instituição Centro Universitário Paraíso em Juazeiro do Norte, Ceará
                    </p>
                    <div>
                        <strong className="text-lg">
                            Minhas habilidades são, mas não se limitam:
                        </strong>
                        <ul className="flex gap-3 flex-wrap mt-1 pr-2 ">
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
                </div>
            </div>
        </section>
    )
}
export { Sobre }