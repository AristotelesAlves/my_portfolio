import { useEffect, useState } from "react"
import { api } from "../services/api"
import { LoadingPost } from "./LoadingPost";
import { Code, Globe } from "phosphor-react";
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

    useEffect(() => {
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
                        <div className="bg-white rounded-xl p-4 shadow-innerShadow gap-5 w-full">
                            <img  
                              className="w-full h-[300px]"
                              src={r.img}
                            />
                            <div className="flex mt-3">
                                <img 
                                  className="h-[50px] w-[50px] rounded-full border-2 border-gray-400"
                                  src="https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.6435-9/147433312_2802841209937743_5338152885317310999_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFVx__5GZCbqXcRrJK8Ie2nPERwjPgbBQE8RHCM-BsFAS_LOYekjtvt5ZmQo23Gkkut_lELvJuNDYVBB12uByvz&_nc_ohc=BJWl6RQNRL0AX-PMXEq&_nc_ht=scontent.fjdo10-1.fna&oh=00_AfBRCBJf3FpaWMBMBQS68LiUTA22uLsStSZ9NgZQJ2o-GQ&oe=649853E9"
                                />
                                <div className="flex flex-col px-3">
                                    <div className="flex justify-between py-2 items-center mt-1">
                                        <p className="font-bold">
                                            Aristóteles Alves
                                        </p>
                                        <p className="font-light text-sm">
                                            {FormatDate}
                                        </p>
                                    </div>
                                    <p className="">
                                        {r.bio}
                                    </p>
                                    <div className="flex justify-end gap-6">
                                        <a className="flex items-center gap-1  hover:opacity-50" href="">
                                            <Code size={22} /> Código
                                        </a>
                                        <a className="flex items-center gap-1  hover:opacity-50" href="">
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