require('dotenv').config();
const snowflake = require('snowflake-sdk');
snowflake.configure({ ocspFailOpen: false });

const getConnection = async () => {

    console.log("Inside getConnectionPool() ...");

    const connection = await snowflake.createConnection({
        //accessUrl: process.env.accessUrl,
        authenticator: 'SNOWFLAKE',
        account: 'ay54595.uae-north.azure',
        username: process.env.SNOWFLAKE_USERNAME,
        password: process.env.SNOWFLAKE_PASSWORD,
        insecureConnect: true,
        clientSessionKeepAlive: true,
        jsTreatIntegerAsBigInt: true,
        database: 'ANALYTICAPP',
        schema: 'PUBLIC'
    });

    return await connection.connect((err, conn) => {
        console.log("Inside connection.connect()");
        if (err) {
            console.error('Unable to connect: ' + err.message);
            throw new Error("Couldn't get the connection: ", err);
        }
        else {
            console.log('Successfully connected to Snowflake');
            console.log("connectionId is: ", conn.getId());
            return conn;
        }
    });

}

const terminateConnection = async (connection) => {
    try{
        return await connection.destroy(function (err, conn) {
            if (err) {
                console.error('Unable to disconnect: ' + err.message);
                return err.message;
            } else {
                console.log('Disconnected connection with id: ' + connection.getId());
                return 'Disconnected connection with id: ' + connection.getId();
            }
        });
    }catch(e){
        console.log("Exception in terminateConnection: ", e);
    }
}


module.exports = {
    getConnection,
    terminateConnection
}