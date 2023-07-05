import { useState } from "react"

interface IperfilImg{
    img: string;
    click: string;
}

function ImgPerfil(props: IperfilImg){

    return <img 
              className={`w-[80px] h-[85px] rounded-xl border-4 ${props.click == props.img ? 'border-[3px] border-green-500': ''}`}
              src={props.img}
              alt=""
            />

}

export { ImgPerfil }