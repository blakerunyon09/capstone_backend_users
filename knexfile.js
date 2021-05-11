require('dotenv').config();

module.exports = {

  development: {
     client: 'pg',
     connection: 'postgres:///users'
  },
  production: {
   client: 'pg',
   connection: {
      database: process.env.DATABASE_URL,
      ssl: {rejectUnauthorized: false}
   },
   migrations: {
      directory: './migrations',
   },
   seeds: { 
      directory: './seeds' 
   }
  }
  
}