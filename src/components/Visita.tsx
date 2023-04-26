import { CaretDown, CaretLeft, CaretRight, CaretUp } from "phosphor-react"
import { useState } from "react"
import { Form } from "./Form"

function Visita(){
    const [max, setMax] = useState(3)
    const [pag, setPag] = useState(1)
    const [open, setOpen] = useState(false)

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

    return(
        <section className="w-[900px] mt-2 justify-center p-2">
           <div className="px-4 hover:bg-gray-200  rounded-xl p-5">
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

            {/* comentarios */}

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