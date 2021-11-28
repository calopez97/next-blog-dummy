const axios = require("axios");

export default async function getPostsByTag(req, res) {
    const { id } = req.query;

    const appId = process.env.DUMMY_ID;
    const URL = `${process.env.DUMMY_BASE_URL}/tag/${id}/post?limit=10`;

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
      })
      .catch((error) => {
        console.log(`Error in API user at getComments: ${error}`);
      });
}