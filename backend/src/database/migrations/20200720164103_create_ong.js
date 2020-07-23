// comando pra rodar: npx knex migrate:latest

//up: criação
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('wpp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();
  })
};

// comando pra rodar: npx knex migrate:down 20200720164103_create_ong.js 
// down desfazer, deletar
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
