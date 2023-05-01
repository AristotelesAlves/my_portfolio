import { CaretDown, CaretLeft, CaretRight, CaretUp } from "phosphor-react"
import { useEffect, useState } from "react"
import { Form } from "./Form"
import { Comentarios } from "./Comentarios"
import { api } from "../services/api"

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
    const [open, setOpen] = useState(false)
    const [comment , setComment] = useState<Icomment[]>([])

    const qt = 3

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
        api.get(`/comments?pagina=${pag}&quantidade=${qt}`).then((response) => setComment(response.data))

        api.get("/all-comments").then((response) => setAllComments(response.data))
    })




    return(
        <section className="w-[900px] mt-2 p-2 flex flex-col gap-5 items-center">
           <div className="w-full px-4 bg-gray-200  rounded-xl p-5">
                <div className="flex items-center h-fit gap-[10px] ">
                     <img 
                      className="w-[30px] h-[30px] rounded-full border-[4px] border-black"
                      src="https://avatars.githubusercontent.com/u/103201579?v=4" 
                      alt=""
                     />
                     <strong>Aristóteles Alves</strong>
                     <p className="text-sm text-gray-800">
                         18 Abril 2023
                     </p>
                </div>
                <div className="flex w-full gap-1 items-center justify-between">
                    <p>
                        Quer me deixar uma mensagem? Preencha este formulário.
                    </p>
                    <button 
                    onClick={() => setOpen(!open)}
                    className="flex items-center px-1 py-1 gap-1 border-b-[2px] border-black hover:border-stone-900 hover:text-stone-900">
                        Formulário de visitante {open == false ? <CaretDown size={20}/> : <CaretUp size={20} /> }
                    </button>
                </div>
                <Form open={open} />
            </div>

            {comment.map(r => {
                return(
                    <Comentarios data={r.data} image={r.image} instagram="dsf" message={r.message} name={r.name} key={r.id}/>
                )
            })}


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
            
        </section>
    )
}

export { Visita }