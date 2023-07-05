import { FormEvent, useState } from "react"
import { ImgPerfil } from "./ImgPerfil"
import { Star, XCircle } from "phosphor-react"
import { api } from "../services/api"
import { FeedbackStar } from "./FeedbackStar"


function Form(){

    const [img, setImg] = useState(' ')
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [contador, setContador] = useState(0)
    const [errorForm, setErrorForm] = useState('')
    const [enviado, setEnviado] = useState(false)
    const [quantidadeStars, setQuantidadeStars] = useState(0)

    const Stars:number[] = [...(new Array(6)).keys() as any]

    const capturandoEventoDoTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        setMensagem(inputValue);
        setContador(mensagem.length);
      };

    function Enviar(e: FormEvent){
        e.preventDefault();

        if(nome.length == 0){
          setErrorForm('Digite seu nome!')
          return
        }
        if(img.length == 0){
          setErrorForm('Escolha uma foto de perfil!')
          return
        }
        if(mensagem.length == 0){
          setErrorForm('Escreva uma mensagem!')
          return
        }
        setErrorForm('')

        api.post('/comment', {
          name: nome,
          message: mensagem,
          image: img,
          instagram: ''
        })

        setImg('')
        setNome('')
        setMensagem('')
        setContador(0)
    }

    return(
        <form 
          onSubmit={Enviar} 
          action=""
          className="w-full flex flex-col justify-center items-center"
        >
          <div className={`flex flex-col justify-center text-center gap-1`}>

            <label className="">
              Olá, qual seu nome ?
            </label>
            <input 
              className="text-center w-[400px] m-auto bg-transparent border border-black rounded-lg"
              maxLength={30}
              type="text" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome completo"
            />
              <label className="mt-2">
                Escolher uma foto de perfil?
              </label>
              <div className="">
                  <div className="">
                      <button
                        type="button"
                        onClick={() => setImg('https://i.pinimg.com/564x/b6/7d/84/b67d84c12d66ceeed13b06c941e1e606.jpg')}

                      >
                          <ImgPerfil click={img} img="https://i.pinimg.com/564x/b6/7d/84/b67d84c12d66ceeed13b06c941e1e606.jpg" />
                      </button>
      
                      <button
                        type="button"
                        onClick={() => setImg('https://i.pinimg.com/564x/d4/59/3f/d4593f0740ac88633474f09a287dfa66.jpg')}

                      >
                          <ImgPerfil click={img} img="https://i.pinimg.com/564x/d4/59/3f/d4593f0740ac88633474f09a287dfa66.jpg" />
                      </button>
      
                      <button
                        type="button"
                        onClick={() => setImg('https://i.pinimg.com/564x/73/f6/a0/73f6a0d4f28aa17e0c48e90547bff86b.jpg')}

                      >
                          <ImgPerfil click={img} img="https://i.pinimg.com/564x/73/f6/a0/73f6a0d4f28aa17e0c48e90547bff86b.jpg" />
                      </button>
      
                      <button
                        type="button"
                        onClick={() => setImg('https://i.pinimg.com/564x/ef/ca/61/efca61ec9e779618f8d97e45ac18006e.jpg')}

                      >
                          <ImgPerfil click={img} img="https://i.pinimg.com/564x/ef/ca/61/efca61ec9e779618f8d97e45ac18006e.jpg" />
                      </button>
      
                      <button
                        type="button"
                        onClick={() => setImg('https://i.pinimg.com/564x/0a/aa/9e/0aaa9eb4b6beaad7a033ddc508278011.jpg')}

                      >
                          <ImgPerfil click={img} img="https://i.pinimg.com/564x/0a/aa/9e/0aaa9eb4b6beaad7a033ddc508278011.jpg" />
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setImg('https://i.pinimg.com/564x/6f/58/98/6f5898a11d65e63faa5487dbd3e44066.jpg')}

                      >
                          <ImgPerfil click={img} img="https://i.pinimg.com/564x/6f/58/98/6f5898a11d65e63faa5487dbd3e44066.jpg" />
                      </button>
      
                    <button
                      type="button"
                      onClick={() => setImg('https://i.pinimg.com/originals/3b/69/a4/3b69a450470e5da95379aee564bfb7c1.gif')}
                    >
                        <ImgPerfil click={img} img="https://i.pinimg.com/originals/3b/69/a4/3b69a450470e5da95379aee564bfb7c1.gif" />
                    </button>
                </div>
            </div>

            <label className="mt-2">
              Qual sua mensagem para o mural de visitante ? 
            </label>

            <textarea 
              placeholder="Sua mensagem..."
              className="text-center w-[600px] h-[30px] m-auto bg-transparent border border-black rounded-lg"
              maxLength={40}
              value={mensagem}
              onChange={capturandoEventoDoTextArea}
            />
            <label className="mt-2">
              Quantas estrelas meu projeto merece ?
            </label>
            <div className="flex gap-1 w-full justify-center">
              {Stars.map(star => {
                return <FeedbackStar isActive={star <= quantidadeStars} button={true} onClick={() => setQuantidadeStars(star)} key={star}/>
              })}
            </div>
          </div>
          <div className="py-1 px-2 bg-roxoPR text-white my-5 rounded-lg text-lg">
              <button
                onClick={() => setEnviado(true)}
                className=""
                type="submit">
                  Enviar formulario
              </button>
          </div>
        </form>
    )
}

export { Form }