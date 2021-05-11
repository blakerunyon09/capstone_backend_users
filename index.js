const dbConfigObj = require('./knexfile')
const express = require('express')
var cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8080

// JSON MIDDLEWARE
app.use(express.json())

// CORS MIDDLEWARE
app.use(cors())

// IMPORT ROUTES
const authRoute = require('./routes/auth')
const intRoute = require('./routes/integration')
const fetch = require('./routes/fetch')
const frontend = require('./routes/frontend')

// ROUTES
app.use('/api', authRoute)
app.use('/api', intRoute)
app.use('/fetch', fetch)
app.use('/frontend', frontend)

app.listen(PORT, ()=> {console.log(`Serving on PORT ${PORT}`)})

let dbConnectionConfig

switch (process.env.NODE_ENV){
  case 'production':
    dbConnectionConfig = dbConfigObj.production
    break;
  default:
    dbConnectionConfig = dbConfigObj.development
}

const appDb = connectToDb(dbConnectionConfig)
Model.knex(appDb)