const router = require('express').Router()
const axios = require('axios').default;

router.get('/', (req, res) => {
  const body = JSON.parse(req.headers.body)

  axios.post(req.headers.endpoint,
    JSON.parse(req.headers.body)
  ,{
    headers: {
      ...req.headers.headers
    }
  })
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    res.send({error: error.data});
  }); 

})

module.exports = router