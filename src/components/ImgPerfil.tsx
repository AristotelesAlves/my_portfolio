import { useState } from "react"

interface IperfilImg{
    img: string;
    click: string;
}

function ImgPerfil(props: IperfilImg){

    return <img 
              className={`w-[130px] h-[130px] rounded-full border-[4px] ${props.click == props.img ? 'border-red-500': ''}`}
              src={props.img}
              alt=""
            />

}

export { ImgPerfil }