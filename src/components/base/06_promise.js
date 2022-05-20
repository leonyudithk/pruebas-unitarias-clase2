import { Usuario } from "./05_ArrayObjetos"


export const getIdPromesa =(id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const usuario = Usuario(id)
            if(usuario){
                resolve(usuario)
            }
            else{
                reject(`No se encontro el usuario con el id = ${id}`)
            }
        }, 2000)
    })
}