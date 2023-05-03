import { Post } from "../components/Post";


function Adm(){
    return (
        <div className="w-full h-screen flex flex-col items-center">
            <form className="flex flex-col bg-linear_01 p-3">
                <label>Nome</label>
                <input type="text" />
                <label>Senha</label>
                <input type="password" name="" id="" />
                <button>Logar</button>
            </form>
        </div>
    )
}

export { Adm }