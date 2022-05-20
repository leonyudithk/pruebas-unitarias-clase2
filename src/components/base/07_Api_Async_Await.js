export const getImagen = async ()=>{
    try{
      //  const apiKey = 'RV7MZTV2p1YH3zkDxMbrp4d8xbLKDjUu';
        const api = 'https://rickandmortyapi.com/api/character'
        const resp = await fetch(api)
        const data = await resp.json()
        console.log(data.results)
        const url = data.results[0].image

        return url

    }
    catch(error){
        console.log(error)
        return error
    }
}