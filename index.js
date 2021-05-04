const express = require('express')
var cors = require('cors')
const app = express()
const PORT = 8080

// KNEX IMPORT
const databaseConfig = require('./knexfile')[process.env.DB_ENV || 'development']
const database = require('knex')(databaseConfig)

// JSON MIDDLEWARE
app.use(express.json())

// CORS MIDDLEWARE
app.use(cors())

// IMPORT ROUTES
const authRoute = require('./routes/auth')
const intRoute = require('./routes/integration')

// MIDDLEWARE
app.use('/api', authRoute)
app.use('/api', intRoute)

app.listen(PORT, ()=> {console.log(`Serving on PORT ${PORT}`)})