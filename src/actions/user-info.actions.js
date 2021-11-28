//Importamos axios Cliente HTTP basado en promesas.
import axios from "axios";

//Funcion Asincrona encargada de retornar la información completa de cada usuario.
export const getUserInfo = async ( userId ) => {

    //Declaramos variables globales. Se crea URL de API encargada de hacer peticiones HTTP a Dummy.io

    const API = process.env.API_USER;
    const DOMAIN = process.env.DOMAIN;
    const url = `${DOMAIN}${API}`
    
    //Se construye un objeto, el cual retoremos y nos permitirá hacer validaciones y control de errores.
    let userInfo = {
        user: [],
        errorUser:true,
    } 
    /*Try/catch/await ya que es una function asincrona, consultando al API que construímos 
        para traer información del usuario en cuestión.
    */
    try {
        const resp = await axios.get(url, {
            params:{
                id:userId,
            }
        });
        
        userInfo.user = resp.data.data ? resp.data.data : [];
        userInfo.errorUser = false;

    } catch (error) {
        console.error(`Error in GetPosts ${error}`);
        userInfo.user = [],
        userInfo.errorUser = true;
    }

    return userInfo;
}