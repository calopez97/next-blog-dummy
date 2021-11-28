//Package Oauth2client from google para manejar la autentificación de cada persona qué inicie sesión.
const { OAuth2Client } = require('google-auth-library');

//Se inicializa la instacia Oauth2client a una const Client.
const client = new OAuth2Client()

//Se declara un objeto que será actualizado una vez se hayan reafirmado las variables y el token.
const users = [];

//Function encargada de reafirmar cada campo qué se obtine al verificar Token.
function upsert(array, item) {
    const i = array.findIndex((_item) => _item.email === item.email);
    if (i > -1) array[i] = item;
    else array.push(item);
}

//Función en cargada de autentificar nuestro user.
export default async function auth(req, res) {
    try{
        const { token } = req.body;
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID,
        })
        const {name, email, picture } = ticket.getPayload();
        upsert(users,{name, email, picture});
        res.status(201);
        res.json({ name, email, picture })

    } catch(err){
        console.error('Error in auth', err);
    }
    
  }