const router = require('express').Router()
const axios = require('axios').default;

router.get('/', (req, res) => {

  // res.send({
  //   headers: req.headers.headers, 
  //   body: req.headers.body,
  //   endpoint: req.headers.endpoint
  // })

  axios.post(req.headers.endpoint, {
    appToken:"Px7U0We8xt9MKovt8kzYioy2KyfGvbv9Expp4GMagwUBcPVpvoI04nKxTSnC+A8j",
    request:{
      applicationName:"Avid4AdventureNew",
      userName:"blake@avid4.com",
      password:"Gigglys5",
      seasonIds:[]
    }
  },{
    headers: {
      ...req.headers.headers
    }
  })
  .then(function (response) {
    res.send({res: response.data});
  })
  .catch(function (error) {
    res.send({error: error.data});
  }); 

})

module.exports = router