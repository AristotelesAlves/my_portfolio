import { GithubLogo, Globe, Plus } from "phosphor-react";
import { useState } from "react";

export function Post(){
    return(
        <section className="w-full mt-4 flex flex-col justify-center p-5 rounded-xl">
            <div className="hover:bg-gray-200 p-6 rounded-lg">
                <div className="flex items-center h-fit gap-[10px]">
                    <img 
                     className="w-[30px] h-[30px] rounded-full border-[2px] border-black"
                     src="https://avatars.githubusercontent.com/u/103201579?v=4" 
                     alt=""
                    />
                    <strong>Aristóteles Alves</strong>
                    <p className="text-sm text-gray-800">
                        18 Abril 2023
                    </p>
                </div>
                <div className="ml-10 mt-2 w-[700px]">
                    <strong className="text-2xl">
                        Meu setup
                    </strong>
                    <p className="py-2">
                        Uma das melhores e maiores vantagens do home office é poder adaptar seu local de trabalho a seu favor. Poder escolher seu monitor, suporte, teclado, mouse, cadeira e tudo que conseguir imaginar! O retorno disso se mostra na produtividade absurda adquirida em não precisar ficar minimizando código ou abrindo documentação em meia tela de 420px para resolução de algum erro no código.
                    </p>
                    <div className="flex justify-center w-full mt-4">
                        <img 
                         className="w-full h-[300px] rounded-xl"
                         src="https://media.licdn.com/dms/image/C4D22AQF1qNbDo6U_mg/feedshare-shrink_800/0/1678134479504?e=1685577600&v=beta&t=OtbLEQYc-JoDaBwKQ96HjLgtbpXYYk546qcpLEU8dOo" 
                         alt="" 
                        />
                    </div>
                    <div className="w-full flex justify p-5 gap-2">
                        <GithubLogo size={32}/>
                        <Globe size={32} />
                    </div>
                </div>
            </div>
        </section>
    )
}