
exports.seed = async function(knex) {
  // TRUNCATE ALL EXISTING TABLES
  await knex.raw('TRUNCATE TABLE "connections" CASCADE')

  // CONNECTIONS, USERS, INTEGRATIONS SAMPLE SEED
  return knex('connections').insert([
    // {
    //   headers: {
    //     "Content-Type":"application/json",
    //     "Accept":"application/json"
    //   },
    //   body: {
    //     appToken:"Px7U0We8xt9MKovt8kzYioy2KyfGvbv9Expp4GMagwUBcPVpvoI04nKxTSnC+A8j",
    //     request:{
    //       applicationName:"Avid4AdventureNew",
    //       userName:"blake@avid4.com",
    //       password:"Gigglys5",
    //       seasonIds:[]
    //     }
    //   },
    //   userid: 1,
    //   integrationid: 1
    // },
    // {
    //   headers: {
    //     "Content-Type":"application/json",
    //     "Accept":"application/json"
    //   },
    //   body: {
    //     appToken:"Px7U0We8xt9MKovt8kzYioy2KyfGvbv9Expp4GMagwUBcPVpvoI04nKxTSnC+A8j",
    //     request:{
    //       applicationName:"Avid4AdventureNew",
    //       userName:"blake@avid4.com",
    //       password:"Gigglys5",
    //       seasonIds:[]
    //     }
    //   },
    //   userid: 1,
    //   integrationid: 2
    // }
  ])

};