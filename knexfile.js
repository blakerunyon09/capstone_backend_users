require('dotenv').config();
const pg = require('pg')
pg.defaults.ssl = true

module.exports = {

  development: {
     client: 'pg',
     connection: 'postgres:///users'
  },
  production: {
   client: 'pg',
   connection: process.env.DATABASE_URL,
   migrations: {
      directory: './migrations',
   },
   seeds: { 
      directory: './seeds' 
   }
  }
}