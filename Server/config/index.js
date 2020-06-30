require('dotenv').config();

const CONFIG = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
}
module.exports = CONFIG;