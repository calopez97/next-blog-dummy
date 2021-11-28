//Importamos axios Cliente HTTP basado en promesas.
import axios from "axios";

//Funcion Asincrona encargada de retornar los posts para el home. 
export const getClientPosts = async ( ) => {

    //Declaramos variables globales. Se crea URL de API encargada de hacer peticiones HTTP a Dummy.io
    const API = process.env.API_POSTS;
    const DOMAIN = process.env.DOMAIN;
    const url = `${DOMAIN}${API}`
    
    //Se construye un objeto, el cual retoremos y nos permitirá hacer validaciones y control de errores.
    let postData = {
        posts: [],
        errorPosts:true,
    } 
    
    /*Try/catch/await ya que es una function asincrona, consultando al API que construímos 
        para traer Posts para el home.
    */
    try {
        const resp = await axios.get(url);
        postData.posts = resp.data.data.data.length > 0 ? resp.data.data.data : [];
        postData.errorPosts = false;

    } catch (error) {
        console.error(`Error in GetPosts ${error}`);
        postData.posts = [],
        postData.errorPosts = true;
    }

    return{
        props:{
            postData,
        }
    }   
}