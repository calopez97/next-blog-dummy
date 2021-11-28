//Importamos axios Cliente HTTP basado en promesas.
import axios from "axios";

//Funcion Asincrona encargada de retornar los Pack de comentarios referentes al post.
export const getPackComments = async ( userId ) => {

    //Declaramos variables globales. Se crea URL de API encargada de hacer peticiones HTTP a Dummy.io

    const API = process.env.API_COMMENTS;
    const DOMAIN = process.env.DOMAIN;
    const url = `${DOMAIN}${API}`
    
    //Se construye un objeto, el cual retoremos y nos permitirá hacer validaciones y control de errores.

    let commentsInfo = {
        comments: [],
        errorComments:true,
    } 

    /*Try/catch/await ya que es una function asincrona, consultando al API que construímos 
        para traer pack de comentarios referentes a X post.
    */
    
    try {
        const resp = await axios.get(url, {
            params:{
                id:userId,
            }
        });
        
        commentsInfo.comments = resp.data.data ? resp.data.data : [];
        commentsInfo.errorComments = false;

    } catch (error) {
        console.error(`Error in GetPosts ${error}`);
        userInfo.user = [],
        userInfo.errorUser = true;
    }

    return commentsInfo;
}