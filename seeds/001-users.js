
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Frodo', password: '123345'},
        {id: 2, username: 'Skippy', password: "abcde"},
        {id: 3, username: 'Mr Welch', password: "cdefg"}
      ]);
    });
};
