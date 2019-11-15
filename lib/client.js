// make sure .env has been loaded
require('dotenv').config();
// "require" pg (after `npm i pg`)
const pg = require('pg');
// Use the pg Client
const Client = pg.Client;
// note: you will need to create the database!
const client = new Client(process.env.DATABASE_URL);
// export the client
module.exports = client;
// client.connect()
//     .then(() => console.log('connected to DB'))
//     .catch(err => console.error('connection error', err));
// client.on('error', err => {
//     console.log('\n ****DATABASE ERROR****\n\n', err);
// });

module.exports = client;
