require('dotenv').config();

module.exports = {

  development: {
     client: 'pg',
     connection: 'postgres:///users'
  },
  production: {
   client: 'pg',
   connection: process.env.DATABASE_URL,
   ssl: {
   rejectUnauthorized: false
   },
   migrations: {
      directory: './migrations',
   },
   seeds: { 
      directory: './seeds' 
   }
  }
  
}