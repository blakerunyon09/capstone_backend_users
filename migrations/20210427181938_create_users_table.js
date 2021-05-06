exports.up = function(knex){
  return knex.schema
  .createTable('users', (table) => {
    table.increments('id')
    table.string('username')
    table.string('email').unique()
    table.string('password')
    table.string('organization')
  })
  .createTable('integrations', (table) => {
    table.increments('id')
    table.string('provider')
    table.string('type')
    table.string('endpoint')
    table.string('method')
  })
  .createTable('connections', (table) => {
    table.increments('id')
    table.string('headers')
    table.string('body')
    table.integer('userid').references('id').inTable('users')
    table.integer('integrationid').references('id').inTable('integrations')
    table.timestamps(true, true)
  })
}
exports.down = function(knex){
  return knex.schema
  .dropTableIfExists('connections')
  .dropTableIfExists('users')
  .dropTableIfExists('integrations')
}