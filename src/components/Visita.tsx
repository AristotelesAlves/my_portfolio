import { CaretLeft, CaretRight } from "phosphor-react"
import { useEffect, useState } from "react"

import { Comentarios } from "./Comentarios"
import { api } from "../services/api"
import { LoadingComentarios } from "./LoadingComentarios"

interface Icomment{
    id: string
    name: string
    image: string
    instagram: string
    message: string
    data: string
}

function Visita(){
    const [allComments, setAllComments] = useState<Icomment[]>([])
    const [pag, setPag] = useState(1)
    const [comment , setComment] = useState<Icomment[]>([])

    const qt = 4

    const max = allComments.length % 2 == 0 ? allComments.length / qt : Math.round(allComments.length / qt)

    function next(){
        if(pag == max){
            return
        }
        setPag(pag+1)
    }
    function back(){
        if(pag == 1){
            return
        }
        setPag(pag-1)
    }


    useEffect(() => {
        
        api.get("/all-comments").then((response) => setAllComments(response.data))

        api.get(`/comments?pagina=${pag}&quantidade=${qt}`).then((response) => setComment(response.data))

    })

    return(
        <section className="w-full mt-2 flex flex-col gap-5 items-center py-2 px-6">

            <div className="bg-white rounded-xl w-full p-10 shadow-innerShadow  gap-5">

            <div className="flex flex-col gap-5 w-full">
            {comment.length > 0 ? (
                comment.map(r => {
                    return(
                        <Comentarios data={r.data} image={r.image} message={r.message} name={r.name} key={r.id}/>
                    )
                })):(<LoadingComentarios/>
                )
            }
            </div>

                

                <nav className="flex gap-1 items-center h-fit w-full justify-center py-4">
                    <button onClick={back} disabled={pag == 1 ? true : false}>
                        <CaretLeft 
                        className={`${pag == 1 ? 'text-gray-700' : 'false'} active:text-gray-800`}
                        size={25} />
                    </button>
                    <p>{pag} / {max}</p>
                    <button onClick={next} disabled={pag == max ? true : false}>
                        <CaretRight 
                        className={`${pag == max ? 'text-gray-700' : 'false'} active:text-gray-800`}
                        size={25}/>
                    </button>
                </nav>
            </div>
            
            <div className="w-[50%] m-auto bg-white rounded-lg shadow-innerShadow">
                <a href="/form"
                    className="flex justify-center items-center w-full h-full py-2 text-base font-semibold hover:opacity-50">
                        Deixe sua mensagem!
                </a>
            </div> 
        </section>
    )
}

export { Visita }