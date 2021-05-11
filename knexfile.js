const { knexSnakeCaseMappers } = require('objection')

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
  ...knexSnakeCaseMappers,
  seeds: { 
     directory: './seeds' 
   },
  }
  
}

const prodConfig = Object.assign(
   {},
   devConfig,
   { client: 'pg', connection: process.env.DATABASE_URL}
 )
 
 module.exports = {
   development: devConfig,
   production: prodConfig
 }