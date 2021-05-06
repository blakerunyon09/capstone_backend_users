const router = require('express').Router()
const auth = require('./private')

// IMPORT MODELS
const User = require('../models/User')
const Integration = require('../models/Integration')
const Connection = require('../models/Connection')

// OBJECTION IMPORT
const dbSetup = require('../db-setup')
dbSetup()

router.get('/user/:id', async (req, res) => {
  id = req.params.id
  
  const user = await User.query().findById(id).withGraphFetched('integrations');
  res.send(user)
})

router.post('/add-integration', auth, async (req, res) => {
  // FIND RELATIONS
  const user = await User.query().where('email', req.user)
  const integration = await Integration.query().where('provider', req.headers.provider).where('type', req.headers.type)

  // CHECK IF CONNETION ALREADY EXISTS
  const foundConnection = await Connection.query().where('userid', user[0].id).where('integrationid', integration[0].id)

  // CREATE CONNECTION
  insertData = {
    headers: req.headers.requestheader,
    body: req.headers.requestbody,
    userid: user[0].id,
    integrationid: integration[0].id
  }

  if(foundConnection.length < 1){const newConnection = await Connection.query().insert(insertData)}
  else{return res.send({msg: "That Connection Already Exists."})}

  res.send({msg: "Connection Created"})
})

router.get('/show-integrations', auth, async (req, res) => {
  // FIND USER
  const user = await User.query().where('email', req.user).withGraphFetched('integrations')

  res.send(user[0])
})

module.exports = router 