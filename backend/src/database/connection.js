const knex = require('knex');
const config = require('../../knexfile');

const connection = knex(config.development);
//conexao de desenvolvimento

module.exports = connection