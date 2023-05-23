import { useState } from "react"

interface IperfilImg{
    img: string;
    click: string;
}

function ImgPerfil(props: IperfilImg){

    return <img 
              className={`w-[80px] h-[80px] rounded-full border-[4px] ${props.click == props.img ? 'border-green-500': ''}`}
              src={props.img}
              alt=""
            />

}

export { ImgPerfil }