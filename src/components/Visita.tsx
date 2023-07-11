import { CaretDown, CaretLeft, CaretRight, CaretUp, Star } from "phosphor-react"
import { useEffect, useState } from "react"

import { api } from "../services/api"
import { Form } from "./Form"
import { FeedbackStar } from "./FeedbackStar"

interface Icomment{
    id: string;
    name: string;
    image: string;
    star: number;
    data: string;
}

function Visita(){
    const [allComments, setAllComments] = useState<Icomment[]>([])
    const [pag, setPag] = useState(1)
    const [comment , setComment] = useState<Icomment[]>([])
    const [open, setOpen] = useState(false)

    const Stars:number[] = [...(new Array(6)).keys() as any]

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
    const handlecoment =  async () =>{
        try {
            api.get(`/comments?pagina=${pag}&quantidade=${qt}`).then((response) => setComment(response.data));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        
        api.get("/all-comments").then((response) => setAllComments(response.data))
        handlecoment()
        // api.get(`/comments?pagina=${pag}&quantidade=${qt}`).then((response) => setComment(response.data))

    })

    

    return(
        <section className="w-full mt-2 flex flex-col gap-5 items-center py-2 px-6">

            <div className="bg-white rounded-xl w-full px-10 py-5  shadow-innerShadow  gap-5 justify-center flex flex-col items-center">
                
                <div className="h-fit w-[80%] shadow-xl bg-white rounded-xl">
                    <button className="flex w-full text-left"
                      onClick={() => setOpen(!open)}
                    > 
                        <img className="rounded-l-xl h-[100px]"
                          src="https://i.pinimg.com/564x/3f/11/ef/3f11ef230bded358d9ff90ffcb6de276.jpg" 
                          alt=""
                        />
                        <div className="py-2 ml-4">
                            <strong className="text-lg ml-2">
                                Aristóteles Alves
                            </strong>
                            <p>
                                “Que tal deixar seu feedback?
                            </p>
                            <p className="ml-3">
                                Basta preencher um formulário {open == false ? "simples clicando aqui!”" : "abaixo!”"}
                            </p>
                        </div>
                        <div className="flex flex-1 h-[100px] items-center justify-end pr-10 w-full">
                            {open == false ? <CaretDown size={30}/>: <CaretUp size={30}/>}
                        </div>
                    </button>
                    {open == false ? "" :  <Form/>}
                </div>
                

                <div className="h-full w-[80%] flex flex-wrap justify-center gap-10">
                    {comment.map((comentario) => {
                        return (
                            <div className="flex h-fit w-[400px] shadow-xl bg-white rounded-xl overflow-hidden">
                                <img className="h-[80px] w-[80px]" 
                                  src={comentario.image}  
                                  alt=""
                                />
                                <div className="h-full flex flex-col justify-center w-full m-auto ml-3">
                                    <p className="mb-1 font-bold text-xl ">
                                        {comentario.name}
                                    </p>
                                    <div className="flex">
                                        {Stars.map(star => 
                                                <FeedbackStar 
                                                    button={false} 
                                                    isActive={star <= comentario.star} 
                                                    onClick={() => ' '}
                                                />
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
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
        </section>
    )
}

export { Visita }