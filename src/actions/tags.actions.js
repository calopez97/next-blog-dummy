//Importamos axios Cliente HTTP basado en promesas.
import axios from "axios";


//Funcion Asincrona encargada de retornar los posts filtrados por tag (keyword).
export const getPostByTag = async (keyword) => {
    
    //Declaramos variables globales. Se crea URL de API encargada de hacer peticiones HTTP a Dummy.io
    const API = process.env.API_TAGS;
    const DOMAIN = process.env.DOMAIN;
    const url = `${DOMAIN}${API}`
    
    //Se construye un objeto, el cual retoremos y nos permitirá hacer validaciones y control de errores.
    let filteredPosts = {
        posts: [],
        errorPosts:true,
    } 
    
    /*Try/catch/await ya que es una function asincrona, consultando al API que construímos 
        para traer información por tag.
    */
    try {
        const resp = await axios.get(url, {
            params:{
                id: keyword,
            }
        });
        
        
        filteredPosts.posts = resp.data.data ? resp.data.data : [];
        filteredPosts.errorPosts = false;

    } catch (error) {
        console.error(`Error in GetPosts ${error}`);
        filteredPosts.posts = [],
        filteredPosts.errorPosts = true;
    }
  
    return {
      props:{
        filteredPosts
      }
    };
  };
  