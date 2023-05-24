export function Post(){
    return(
        <section className="w-full mt-2 flex flex-col gap-5 items-center py-2 px-6">
            <div className="bg-white rounded-xl p-4 shadow-innerShadow gap-5 w-full">
                <img  
                  className="w-full h-[300px] bg-red-500"
                  src=""
                />
                <div className="flex mt-3">
                    <img 
                      className="h-[50px] w-[50px] rounded-full bg-green-500"
                      src="https://i.pinimg.com/564x/5c/60/9d/5c609d75c5ee22050c7894a7b2c7ebbe.jpg"
                    />
                    <div className="flex flex-col px-3">
                        <div className="flex justify-between py-2 items-center mt-1">
                            <p className="font-bold">
                                Aristóteles Alves
                            </p>
                            <p className="font-light text-sm">
                                24/05/2023
                            </p>
                        </div>
                        <p className="">
                            Uma das melhores e maiores vantagens do home office é poder adaptar seu local de trabalho a seu favor. Poder escolher seu monitor, suporte, teclado, mouse, cadeira e tudo que conseguir imaginar! O retorno disso se mostra na produtividade absurda adquirida em não precisar ficar minimizando código ou abrindo documentação em meia tela de 420px para resolução de algum erro no código.
                        </p>
                        <div className="flex justify-end gap-6">
                            <a href="">
                                Código
                            </a>
                            <a href="">
                                Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}