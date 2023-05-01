import { FormEvent, useState } from "react"
import { ImgPerfil } from "./ImgPerfil"

interface Iform{
    open: boolean
}

function Form(props: Iform){

    const [img, setImg] = useState(' ')
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [contador, setContador] = useState(0)

    const capturandoEventoDoTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        setMensagem(inputValue);
        setContador(mensagem.length);
      };

    function Enviar(e: FormEvent){
        e.preventDefault();
        setImg('')
        setNome('')
        setMensagem('')
        setContador(0)
    }

    return(
        <form 
          onSubmit={Enviar} 
          className={`${props.open == false ? 'hidden': 'bg-gray-200'} flex flex-col w-full mt-5 gap-2  p-4 rounded-lg`} 
          action=""
        >

            <label className="pl-2 font-semibold text-lg">
                Nome
            </label>

            <input 
              className="py-2 px-2 shadow-2xl rounded-lg mb-2"
              maxLength={30}
              type="text" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome completo"/>

            <div className="w-full bg-gray-300 py-3 flex flex-col items-center rounded-2xl shadow-2xl">
                <label className="pl-2 font-semibold text-lg">
                    Foto de perfil
                </label>
                <div className="w-full h-[300px] p-5 flex-wrap gap-1 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setImg('https://i.pinimg.com/564x/b6/7d/84/b67d84c12d66ceeed13b06c941e1e606.jpg')}
                      className="w-[130px] h-[130px] rounded-full"
                    >
                        <ImgPerfil click={img} img="https://i.pinimg.com/564x/b6/7d/84/b67d84c12d66ceeed13b06c941e1e606.jpg" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setImg('https://i.pinimg.com/564x/d4/59/3f/d4593f0740ac88633474f09a287dfa66.jpg')}
                      className="w-[130px] h-[130px] rounded-full"
                    >
                        <ImgPerfil click={img} img="https://i.pinimg.com/564x/d4/59/3f/d4593f0740ac88633474f09a287dfa66.jpg" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setImg('https://i.pinimg.com/564x/73/f6/a0/73f6a0d4f28aa17e0c48e90547bff86b.jpg')}
                      className="w-[130px] h-[130px] rounded-full"
                    >
                        <ImgPerfil click={img} img="https://i.pinimg.com/564x/73/f6/a0/73f6a0d4f28aa17e0c48e90547bff86b.jpg" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setImg('https://i.pinimg.com/564x/ef/ca/61/efca61ec9e779618f8d97e45ac18006e.jpg')}
                      className="w-[130px] h-[130px] rounded-full"
                    >
                        <ImgPerfil click={img} img="https://i.pinimg.com/564x/ef/ca/61/efca61ec9e779618f8d97e45ac18006e.jpg" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setImg('https://i.pinimg.com/564x/0a/aa/9e/0aaa9eb4b6beaad7a033ddc508278011.jpg')}
                      className="w-[130px] h-[130px] rounded-full"
                    >
                        <ImgPerfil click={img} img="https://i.pinimg.com/564x/0a/aa/9e/0aaa9eb4b6beaad7a033ddc508278011.jpg" />
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setImg('https://i.pinimg.com/564x/6f/58/98/6f5898a11d65e63faa5487dbd3e44066.jpg')}
                      className="w-[130px] h-[130px] rounded-full"
                    >
                        <ImgPerfil click={img} img="https://i.pinimg.com/564x/6f/58/98/6f5898a11d65e63faa5487dbd3e44066.jpg" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setImg('https://i.pinimg.com/originals/3b/69/a4/3b69a450470e5da95379aee564bfb7c1.gif')}
                      className="w-[130px] h-[130px] rounded-full"
                    >
                        <ImgPerfil click={img} img="https://i.pinimg.com/originals/3b/69/a4/3b69a450470e5da95379aee564bfb7c1.gif" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setImg('https://i.pinimg.com/originals/eb/94/72/eb947275a119eeecb960f4e0f5cc55f1.gif')}
                      className="w-[130px] h-[130px] rounded-full"
                    >
                        <ImgPerfil click={img} img="https://i.pinimg.com/originals/eb/94/72/eb947275a119eeecb960f4e0f5cc55f1.gif" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setImg('https://media.tenor.com/JTwRXAfSofIAAAAd/pato.gif')}
                      className="w-[130px] h-[130px] rounded-full"
                    >
                        <ImgPerfil click={img} img="https://media.tenor.com/JTwRXAfSofIAAAAd/pato.gif" />
                    </button>

                </div>
            </div>

            <label className="pl-2 font-semibold text-lg">
                Mensagem
            </label>

            <textarea 
              placeholder="Sua mensagem..."
              className="py-1 px-2 shadow-2xl rounded-lg w-full h-[100px] resize-none"
              maxLength={200}
              value={mensagem}
              onChange={capturandoEventoDoTextArea}
            />
            <p className="w-full px-1 flex gap-1 ">
                caractéres restando:
                <p className={`${contador > 150 ? 'text-red-500': '' }`}>
                    {200 - contador} / 200
                </p>
            </p>
            <div className="w-full flex justify-center items-center h-fit py-2">
                <button
                  className="bg-black py-2 px-3 text-xl text-white rounded-lg shadow-xl shadow-zinc-900/50"
                  type="submit">
                    Enviar formulario
                </button>
            </div>
        </form>
    )
}

export { Form }