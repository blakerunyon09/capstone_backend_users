const router = require('express').Router()
const { registerValidation, loginValidation } = require('../validations/validations')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// KNEX IMPORT
const databaseConfig = require('../knexfile')[process.env.DB_ENV || 'development']
const database = require('knex')(databaseConfig)

router.get('/users', (_, res) => {
  database('users')
  .then(users => res.send(users))
})

router.post('/register', (req, res) => {
  const newUser = req.body

  // VALIDATE USER REQUIREMENTS
  const { error } = registerValidation(newUser)
  if(error) return res.status(400).send(error.details[0].message)

  // CREATE VALID USER & HANDLE RESPONSE
  return bcrypt
  .hash(newUser.password, 10)
  .then(hashedPassword => {
    database('users')
    .insert({
      "username": newUser.username,
      "email": newUser.email,
      "password": hashedPassword,
      "organization": newUser.organization
    })
    .then(message => res.status(201).send("New User Created"))
    .catch(err => {
      if(err.constraint === "users_email_unique") return res.send("Email Already Exists")
      else return res.send(err)
    })
  })
})

router.post('/login', (req, res) => {
  const user = req.body

  // VALIDATE USER REQUIREMENTS
  const { error } = loginValidation(user)
  if(error) return res.status(400).send(error.details[0].message)

  database('users')
  .where({"email": user.email})
  .then(foundUser => {
    if(foundUser.length === 0) return res.send("Email or Password Incorrect")
    return bcrypt
      .compare(user.password, foundUser[0].password)
      .then(passwordMatched => {
        if (!passwordMatched) return res.status(403).send({error: 'Invalid Password'})

        // CREATE TOKEN
        const token = jwt.sign({id: foundUser[0].email}, process.env.TOKEN_SECRET)
        res.header('auth-token', token).send('Logged In')
      })
      .catch(err => res.send("error"))
  })
  .catch(err => res.send(err))
})


module.exports = router