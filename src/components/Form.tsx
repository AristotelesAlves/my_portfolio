import { useState } from "react"
import { ImgPerfil } from "./ImgPerfil"

interface Iform{
    open: boolean
}

function Form(props: Iform){

    const [img, setImg] = useState(' ')
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')

    return(
        <form className={`${props.open == false ? 'hidden': ' '} flex flex-col w-full`} action="">
            <label>Nome</label>
            <input type="text" name="" id="" />
            <div className="w-full">
                <button type="button" className="w-fit">
                    Escolha uma foto de perfil
                </button>
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
            <label>Mensagem</label>
            <textarea name="" id=""></textarea>
        </form>
    )
}

export { Form }