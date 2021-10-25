const { Pool } = require('pg');
const connection = {
    host: 'localhost',
    port: 5432,
    database: 'bredex_f1',
    user: 'postgres',
    password: 'postgres'
};

const pool = new Pool(connection);

module.exports = pool;