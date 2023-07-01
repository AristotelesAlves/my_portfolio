import { useEffect, useState } from "react"
import { api } from "../services/api"
import { LoadingPost } from "./LoadingPost";
import { Code, Globe, Heart } from "phosphor-react";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Ipost{
    img: string;
    bio: string;
    code: string;
    demo: string;
    data: string
}

export function Post(){

    const [post, setPost] = useState<Ipost[]>([])

    const [heart, setHeart] = useState(false)

    function eventHeartClick(){
            heart == false ? [localStorage.setItem('curtida','sim'), setHeart(true)] : [localStorage.removeItem('curtida'), setHeart(false)]
    }

    useEffect(() => {
        localStorage.getItem('curtida') == 'sim' ? setHeart(true) : setHeart(false)
        api.get('/post').then((response) => setPost(response.data))
    },[])

    return(
        <section className="w-full mt-2 flex flex-col gap-5 items-center py-2 px-6">
            {post.length > 0 ? (
                post.map(r => {
                    console.log(r.img)
                    const data = new Date(r.data)
                    const FormatDate = format(data, 'dd MMMM yyyy', { locale: ptBR });

                    return(
                        <div className="bg-white rounded-xl py-4 px-5 shadow-innerShadow gap-5 w-full">
                            <img  
                              className=""
                              src={r.img}
                            />
                            <div className="flex mt-3">
                                <img 
                                  className="h-[50px] w-[50px] rounded-full border-2 border-gray-400"
                                  src="https://i.pinimg.com/564x/93/a0/dd/93a0dd47cab45363ef2a0a697c4d9538.jpg"
                                />
                                <div className="flex flex-col px-3">
                                    <div className="flex py-2 justify-between items-center mt-1">
                                        <div className="flex items-center">
                                            <p className="font-bold">
                                                Aristóteles Alves
                                            </p>
                                            <p className="font-light text-sm ml-2 text-zinc-600">
                                             • {FormatDate}
                                            </p>
                                        </div>
                                        <button onClick={eventHeartClick}>
                                            {heart == false ? <Heart size={30} /> : <Heart size={30} color="#d00606" weight="fill" />}
                                        </button>
                                    </div>
                                    <p className="">
                                        {r.bio}
                                    </p>
                                    <div className="flex justify-end gap-6 mt-2">
                                        <a className="flex items-center gap-1  hover:opacity-50" href={r.code}>
                                            <Code size={22} /> Código
                                        </a>
                                        <a className="flex items-center gap-1  hover:opacity-50" href={r.demo}>
                                            <Globe size={22} /> Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })):(<LoadingPost/>
                )
            }
        </section>
    )
}