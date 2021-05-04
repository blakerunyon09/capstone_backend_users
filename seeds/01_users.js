
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "rickruben", email: "rick@example.com", password: "Ruby123", organization: "Flatiron"},
      ]);
    });
};