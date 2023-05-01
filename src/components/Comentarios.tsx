import { CaretDown } from "phosphor-react";

interface Icomentarios{
    name: string
    image: string
    instagram: string
    message: string
    data: string
}

function Comentarios(props: Icomentarios){
    return(
        <div className="w-full px-4 bg-gray-200 rounded-xl p-5">
            <div className="flex items-center h-fit gap-[10px] ">
                <img 
                 className="w-[30px] h-[30px] rounded-full border-[4px] border-black"
                 src={props.image} 
                 alt=""
                />
                <strong>{props.name}</strong>
                <p className="text-sm text-gray-800">
                    {props.data}
                </p>
            </div>
            <div className="break-words	px-4 ml-6">
                <p>
                {props.message}
                </p>
            </div>
        </div>
    )
}

export { Comentarios }