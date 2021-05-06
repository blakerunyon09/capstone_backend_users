
exports.seed = async function(knex) {
  // TRUNCATE ALL EXISTING TABLES
  await knex.raw('TRUNCATE TABLE "integrations" CASCADE')

  // CONNECTIONS, USERS, INTEGRATIONS SAMPLE SEED
  return knex('integrations').insert([
    {
      provider: "Active",
      type: "Seasons",
      endpoint: "https://awapi.active.com/rest/camps-season-info",
      method: "POST"
    },{
      provider: "Active",
      type: "Registrations",
      endpoint: "https://awapi.active.com/rest/camps-registration-info",
      method: "POST"
    }
  ])

};