import { Post } from "../components/Post";


function Adm(){
    return (
        <div className="w-full h-screen flex flex-col items-center">
            <div className="">
                <strong>Perfil</strong>
                <form>
                    <label>Imagem do perfil</label>
                    <label>Banner do perfil</label>
                    <button type="submit">Atualizar</button>
                </form>
            </div>
            <div>
                <strong>Publicação</strong>
                <div>
                    <form action="">
                        <label>Titulo</label>
                        <label>Descrição</label>
                        <label>GitHub</label>
                        <label>Web</label>
                        <label>Imagem</label>
                    </form>
                </div>
                <Post/>
            </div>
            
        </div>
    )
}

export { Adm }