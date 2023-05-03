import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface IAuthProvider{
    children: ReactNode;
}

interface Iuser{
    name: string;
    password: string;
}

interface IAuthContextData{
    user: Iuser | null;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider(props: IAuthProvider){

    const [user,setUser] = useState <Iuser | null> (null) // seta o usuário, de inicil fica como null

    async function signIn(name: string, password:string){ // Envia o nome e a sanha para conferir se há um usuário no banco de dados!
        const response = await api.post('/admin',{
            name: name,
            password: password
        })
        
        const { token, user } = response.data // separando o token da info do user
        localStorage.setItem('@admin:token', token) // slvando o token do user
        setUser(user)
    }

    
    return (
        <AuthContext.Provider value={{user}}>
            {props.children}
        </AuthContext.Provider>
    )
}