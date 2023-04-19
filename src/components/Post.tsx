export function Post(){
    return(
        <section className="w-[900px] mt-4 flex flex-col justify-center p-5 rounded-xl hover:bg-gray-200">
            <div className="flex items-center h-fit gap-[10px]">
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
            <div className="ml-10 mt-2">
                <strong className="text-2xl">
                    Titulo
                </strong>
                <p>
                    Este é o meu site onde eu tento postar sobre o que estou fazendo e como fazer as coisas com o código. Você pode acompanhar o RSS pressionando o botão "Seguir" acima. Ou se você só está interessado em coisas sobre as quais escrevi, confira.
                </p>
                <div className="flex justify-center w-full mt-4">
                    <img 
                     className="w-[700px] h-[300px] rounded-xl"
                     src="" 
                     alt="" 
                    />
                </div>
            </div>
        </section>
    )
}