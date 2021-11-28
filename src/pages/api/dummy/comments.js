//Importamos axios Cliente HTTP basado en promesas.
const axios = require("axios");

//Funcion Asincrona encargada de retornar JSON de comentarios relacionados al post.
export default async function getComments(req, res) {
    //Se extrae el id del Request.body.
    const { id } = req.query;

    //Declaramos variables globales. Se crea URL de API encargada de hacer peticiones HTTP a Dummy.io;
    const appId = process.env.DUMMY_ID;
    const URL = `${process.env.DUMMY_BASE_URL}/post/${id}/comment?limit=10`;

    //Se hace petición para obtener el JSON de comentario declarando parametros y headers.
    await axios.get( URL, {
        headers:{
            'app-id': appId,
        }
    })
    .then((response) => {
        //Sí la petición es exitosa. Retorne.
        return res.json({
          status: response.status,
          statusText: response.statusText,
          data: response.data,
        });
      })
      .catch((error) => {
        //Sí la petición ha fallado...
        console.log(`Error in API user at getComments: ${error}`);
      });
}