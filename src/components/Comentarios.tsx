import { CaretDown } from "phosphor-react";

function Comentarios(){
    return(
        <div>
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
                
                <div className="ml-10 mt-1">
                    <p>
                        Quer me deixar uma mensagem? Preencha este formulário.
                    </p>
                    <p className="">
                        Formulário de visitante                     </p>
                </div>
           </div>
        </div>
    )
}