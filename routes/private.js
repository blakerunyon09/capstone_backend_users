const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
  const token = req.headers.token
  if (!token) return res.status(401).send({msg: 'Access Denied'})

  try{
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = verified.id
    next()
  }catch(err){
    res.status(400).send({msg: 'Invalid Token'})
  }
}