//Importamos axios Cliente HTTP basado en promesas.
const axios = require("axios");

//Funcion Asincrona encargada de retornar JSON de posts para el home.
export default async function getPosts(req, res) {
    //Declaramos variables globales. Se crea URL de API encargada de hacer peticiones HTTP a Dummy.io;
    const appId = process.env.DUMMY_ID;
    const URL = `${process.env.DUMMY_BASE_URL}post?limit=10`;

    //Se hace petición para obtener el JSON de Posts declarando parametros y headers.
    await axios.get( URL, {
        headers:{
            'app-id': appId,
        }
    })
    .then((response) => {
        return res.json({
          status: response.status,
          statusText: response.statusText,
          data: response.data,
        });
        // res.end();
        // return res;
      })
      .catch((error) => {
        console.log(`Failed to subscribe: ${error}`);
      });
}