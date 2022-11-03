require('dotenv').config();
const pg = require('pg');

const pool = new pg.Pool({
  user: process.env.USERNAME,
  database: process.env.DATABASE_NAME,
  password: process.env.PASSWORD,
  port: process.env.PGPORT,
  host: process.env.PGHOST, //Insert Server ip address after deployment
});

module.exports = { pool };

/* const client = new pg.Client({
  user: process.env.USERNAME,
  database: process.env.DATABASE_NAME,
  password: process.env.PASSWORD,
  port: process.env.PGPORT,
  host: 'localhost', //Insert Server ip address after deployment
});
client.connect(); */
