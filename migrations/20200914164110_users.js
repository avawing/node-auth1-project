
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', tbl=>{
        tbl.increment()
        tbl.string('username').unique().notNullable()
        tbl.string('password').notNullable()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('users')
};
