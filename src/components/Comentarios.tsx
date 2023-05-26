import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Icomentarios{
    name: string
    image: string
    message: string
    data: string
}

function Comentarios(props: Icomentarios){

    const data = new Date(props.data)
    const FormatDate = format(data, 'dd MMMM yyyy', { locale: ptBR });

    return(
        <div className="w-full flex flex-col ">

            <div className="bg-gray-300 px-4 p-3 rounded-xl shadow-xl">
                <div className="flex h-fit items-center gap-2 ">
                    <img 
                      className="h-[40px] w-[40px] bg-white rounded-full border-2 border-gray-400 "
                      src={props.image} 
                      alt=""
                    />
                    <div className="flex items-center w-full h-6 gap-2 mb-2">
                        <p className="font-bold text-lg">
                            {props.name}
                        </p>{/* name */}
                        <ul className="font-light text-sm flex items-center list-disc ml-5 text-gray-500">
                            <li>{FormatDate}</li>
                        </ul>{/* data */}
                    </div>
                </div>
                <p className="w-fit ml-[46px] h-6 ">
                    {props.message}
                </p>{/* mensagem */}
            </div>
        </div>
    )
}

export { Comentarios }