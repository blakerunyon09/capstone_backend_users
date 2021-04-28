const express = require('express')
const app = express()
const PORT = 8080

// KNEX IMPORT
const databaseConfig = require('./knexfile')[process.env.DB_ENV || 'development']
const database = require('knex')(databaseConfig)

// JSON MIDDLEWARE
app.use(express.json())

// IMPORT ROUTES
const authRoute = require('./routes/auth')

// MIDDLEWARE
app.use('/api', authRoute)

app.listen(PORT, ()=> {console.log(`Serving on PORT ${PORT}`)})