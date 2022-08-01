require('dotenv').config();
const express = require("express");
const cors = require('cors');
const { ApiError, Client, TransactionsController, AuthenticationController } = require('finicity-apilib');

const app = express()
const port = 4000;
const routes = require("./thoughtspot");

app.use("/api", routes);

const { insertquery } = require("./jsontosql");
// const { query } = require("./queries");
const { getConnection, terminateConnection } = require("./connection");


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())



const client = new Client({
  finicityAppKey: process.env.FINICITY_APP_KEY ,
  timeout: 100000,
  finicityAppToken: process.env.FINICITY_APP_TOKEN,
})


const contentType = 'application/json';
const accept = 'application/json';
const authenticationController = new AuthenticationController(client);


app.get("/finicitydata", async (req, res) => {
  let customerID = req.query.customerid;
  console.log(typeof (customerID),req.query.customerid);

  const body = {
    partnerId: process.env.FINICITY_PARTNERT_ID,
    partnerSecret: process.env.FINICITY_PARTNERT_SECRET,
  };


  //this is the customer Id 
  const customerId = 6001391193;
 


  const fromDate = 1588365858;
  // to date from user  later 
  const toDate = 1653110643;
  const start = 1;
  const limit = 1000;
  const sort = 'desc';
  const includePending = false;
  try {
    const { result, ...httpResponse } = await authenticationController.partnerAuthentication(contentType, accept, body);
    const authToken = result.token
    console.log(authToken)
    try {
      const newClient = client.withConfiguration(
        { finicityAppToken: authToken }
      )
      const transactionsController = new TransactionsController(newClient);

      const { result, ...httpResponse } = await transactionsController.getCustomerTransactionsAll(accept, customerId, fromDate, toDate, start, limit, sort, includePending);

      // create auto insert query
      const autoQuery = await insertquery(result);

      //create snowflake connection
      var connection = null;
      connection = await getConnection();      
      console.log("connectionId is: ", connection.getId());

      var deleteStatement = await connection.execute(
        {
          sqlText: `DELETE FROM TRANSACDATA`,
          streamResult: true,
          complete: function (err, stmt, rows) {
            rows = [];
            stmt.streamRows({
              start: 0,
              end: 10,
            })
              .on('error', function (err) {
                console.error('Unable to consume requested rows');
              })
              .on('data', function (row) {
                rows.push(row);
                console.log("rows: ", rows);
              })
              .on('end', function () {
                console.log('Number of rows consumed for delete : ' + rows.length);
          
              });          
          }
        });
        
    var insertStatement = await connection.execute(
      {
        sqlText: autoQuery,
        streamResult: true,
        complete: function (err, stmt, rows) {
          rows = [];
          stmt.streamRows({
            start: 0,
            end: 10,
          })
            .on('error', function (err) {
              console.error('Unable to consume requested rows');
            })
            .on('data', function (row) {
              rows.push(row);
              console.log("rows: ", rows);
            })
            .on('end', function () {
              console.log('Number of rows consumed for insert: ' + rows.length);
              res.send(200)
            });
        }
      });


    } catch (error) {
      res.send(404)
    }

  } catch (error) {
    console.log(error)
    res.send(401)
    if (error instanceof ApiError) {
      
      const errors = error.result;
      
      const { statusCode, headers } = error;
      
    }
  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})



//this customerID from user
// const customerId = 6001391193;
