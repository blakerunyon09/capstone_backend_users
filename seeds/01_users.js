
exports.seed = async function(knex) {
  // TRUNCATE ALL EXISTING TABLES
  await knex.raw('TRUNCATE TABLE "users" CASCADE')

  // CONNECTIONS, USERS, INTEGRATIONS SAMPLE SEED
  return knex('users').insert({
    username: "rickruben", 
    email: "rick@example.com", 
    password: "Ruby123", 
    organization: "Flatiron",
  })

};