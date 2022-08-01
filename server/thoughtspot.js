require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { ApiError, Client, SessionController, DataController } = require('@thoughtspot/rest-api-sdk');

const router = express.Router();

router.use(express.urlencoded({ extended: true }))
router.use(express.json())
router.use(cors())



const client = new Client({
  acceptLanguage: 'application/json',
  contentType: 'application/json',
  timeout: 100000,
  accessToken: process.env.THOUGHTSPOT_ACCESSTOKEN,

})



router.get("/", async (req, res) => {
  let measure = req.query.measure;
  let attribute = req.query.attribute;


  // console.log(measure, attribute);
  try {
    const newclient = client.withConfiguration({ baseUrl: 'https://my1.thoughtspot.cloud' })
    const sessionController = new SessionController(newclient);
    const contentType = null;

    const body = {
      userName: process.env.THOUGHTSPOT_USERNAME,
      password: process.env.THOUGHTSPOT_PASSWORD
    };
    const { result, ...httpResponse } = await sessionController.getToken(body);
    const accToken = result.token;

    try {
      const body = {
        queryString: `[${attribute}] [${measure}]`,
        // dataObjectId: 'e23a7292-1b41-46cb-9a91-8e83a51e443f',
        dataObjectId: '1a8e1824-341a-4eb3-aa03-02d78ce17b9c',
      
      };
      const newclient = client.withConfiguration({ baseUrl: 'https://my1.thoughtspot.cloud', accessToken: accToken })

      const dataController = new DataController(newclient);


      const { result, ...httpResponse } = await dataController.searchQueryData(body);
      let dataResult1 = [];
      for (let i = 0; i < result.data.length; i++) {
        dataResult1.push({ name: result.data[i][0], value: result.data[i][1] });
      }     

      //sending graph plotting data
      res.send(dataResult1);


    } catch (error) {
      res.send('404')
      console.log(error)
      if (error instanceof ApiError) {
        const errors = error.result;
        // const { statusCode, headers } = error;
      }
    }
  } catch (error) {
    console.log(error)
  }


})


module.exports = router;