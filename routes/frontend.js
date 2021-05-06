const router = require('express').Router()
const IntegrationsList = require('../data/integrations')

// OBJECTION IMPORT
const dbSetup = require('../db-setup')
dbSetup()

router.get('/integrations', (req, res) => {
  res.send(IntegrationsList)
})

router.get('/:integration', (req, res) => {
  let name = req.params.integration
  const foundAPI = IntegrationsList.find(integration => integration.name.toLowerCase() === name.toLowerCase())

  res.send(foundAPI)
})

router.get('/:integration/:metric', (req, res) => {
  let name = req.params.integration
  let metric = req.params.metric

  const foundAPI = IntegrationsList.find(integration => integration.name.toLowerCase() === name.toLowerCase())
  const foundMetric = foundAPI.options.find(m => m.name.toLowerCase() === metric.toLowerCase())

  res.send({
    logo: foundAPI.logo,
    name: foundAPI.name,
    metric: foundMetric,
  })
})

module.exports = router