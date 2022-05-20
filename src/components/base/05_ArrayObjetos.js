import { user } from "../../data/user"


export const Usuario = (id)=>{
    return user.find(usuario => usuario.id === id)
}