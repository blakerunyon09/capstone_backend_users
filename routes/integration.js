const router = require('express').Router()
const axios = require('axios').default;

router.get('/fetchTest', (req, res) => {
  console.log("Cha.")
  
  axios.post('https://awapi.active.com/rest/camps-season-info/', {
    appToken:"Px7U0We8xt9MKovt8kzYioy2KyfGvbv9Expp4GMagwUBcPVpvoI04nKxTSnC+A8j",
    request:{
      applicationName:"Avid4AdventureNew",
      userName:"blake@avid4.com",
      password:"Gigglys5",
      seasonIds:[]
    }
  },{
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
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