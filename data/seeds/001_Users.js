exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
        id: 1,
        "username": "test1",
        "password": "tester"
      }, ]);
    });
};