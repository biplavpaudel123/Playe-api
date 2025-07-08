const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config({ path: path.join(__dirname, '../', '.env') });

const app = require('./app');
const connectMongoDB = require('./lib/mongo')

const PORT = process.env.PORT || 5000;


const server = https.createServer({
    key: fs.readFileSync(path.join(__dirname, './config/keys/key.pem')),
    cert: fs.readFileSync(path.join(__dirname, './config/keys/cert.pem')),
}, app);

async function startServer() {
    await connectMongoDB();
    server.listen(PORT, () => {
        console.log(`Listening in port ${PORT}`);
    });
}

startServer();