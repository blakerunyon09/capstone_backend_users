exports.up = function(knex){
  return knex.schema.createTable('users', (table) => {
     table.increments('id')
     table.string('username')
     table.string('email').unique()
     table.string('password')
     table.string('organization')
  })
}
exports.down = function(knex){
  return knex.schema.dropTableIfExists('users')
}