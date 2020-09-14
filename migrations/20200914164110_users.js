
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', tbl=>{
        tbl.increment()
        tbl.string('username')
        tbl.string('password')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('users')
};
