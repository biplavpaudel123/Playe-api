const https = require('https');
const path = require('path');
require('dotenv').config({path: path.join(__dirname,'../','.env')});
const fs = require('fs');
const connectMongoDB= require('./lib/mongo')
const app= require('./app');

const PORT= process.env.PORT || 5000;


const server= https.createServer({
    key:fs.readFileSync(path.join (__dirname,'../config/keys/key.pem')),
    cert: fs.readFileSync(path.join(__dirname,'../config/keys/cert.pem')),
},app);

async function startServer(){
    await connectMongoDB();
    server.listen(PORT,()=>{
        console.log(`Listening in port ${PORT}`);
    });
}

startServer();