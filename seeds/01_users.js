
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "brunyon", email: "blakerunyon09@gmail.com", password: "Ruby123", organization: "Flatiron"},
      ]);
    });
};