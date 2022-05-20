import { isLoggedIn } from "../../../components/base/01_variables";
import { usuario } from "../../../components/base/02_string";
import { getSaludo } from "../../../components/base/03_funcion";
import { getUser } from "../../../components/base/04_objetos";
import { getIdPromesa } from "../../../components/base/06_promise";
import { user } from "../../../data/user";
import { getImagen } from "../../../components/base/07_Api_Async_Await";
import { Usuario } from "../../../components/base/05_ArrayObjetos";

describe('Realizar pruebas a toda la carpeta base', () => {

    //--------------07_api_async_await----------------------------///
    test('verificar la url imagen', async () => {

        const url = await getImagen()
        console.log(url)

        expect(typeof url).toBe('string')
       expect(url.includes('https://')).toBe(true)


    })

    //-----------------06_Promesas usuario cumple con el id---------------------------------//
    test('El usuario se cargue coorectamente partiendo de un id', (done) => {
        const id = 4
        console.log(id)

        getIdPromesa(id)
            .then(result => {
                expect(result).toEqual(user[3])
                done()
            })


    })

    //------------Array de Objetos Usuarios data-user.js-----------------------------//
    test('retorne un usuario  a partir de id', () => {
        //arreglar
        const id = 2

        //el usuario que llega desde la funcion Usuario que esta dentro de 05ArrayObjeto
        //a este usario es a quien le voy hacer la prueba
        const traerUser = Usuario(id)
        console.log(traerUser)

        //variables de comparacion pra hacer la prueba
        const userComparar = user.find(usuarios => usuarios.id === id)
        console.log(userComparar)

        //actuar
        expect(traerUser).toEqual(userComparar)
        expect(traerUser).toEqual(user[1])
    })
    //---------------------Cuando el id no exista  dentro de data user.js
    test('cuando el id no exista', () => {
        const id = 9
        const traerUser = Usuario(id)
        console.log(traerUser)

        expect(traerUser).toEqual(undefined)

    })

    //-------------04_objeto.js----------------------//
    test('obtener el objeto', () => {

        expect(getUser()).toEqual({
            name: 'frontend10',
            pass: 'F10123'
        })

    })

    //----------03_funcion-----------------------//
    test('verificar nombre', () => {
        //Arreglar
        const nombre = "Angie"
        const saludo = getSaludo(nombre)

        //Actuar
        expect(saludo).not.toBe(`Hola ${nombre}, NO eres Bienvenido a Frontend - 10`)
        expect(saludo).toBe(`Hola ${nombre}, eres Bienvenido a Frontend - 10`)
        expect(saludo).toContain(nombre)
        expect(saludo).not.toContain(`Chao`)

    })
    //-------------02_string.js-----------------------//
    test('validar el usuario', () => {
        //Arreglar
        const validarUsuario = 'Frontend-10'

        //Actuar
        expect(usuario).toBe(validarUsuario)
    })

    //-------------01_variable.js--------------------/
    //--------validad variable boolena---------
    test('validar login es correcto', () => {
        //Arreglar la
        const isAutenticad = isLoggedIn
        //Actuar
        if (isAutenticad) {
            console.log('Bienvenido Usuario Autenticado')
        }
        else {
            throw new Error('Usuario NO Autenticado')
        }
    });



})

