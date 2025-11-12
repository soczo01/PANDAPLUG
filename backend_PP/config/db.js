import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',        // tedd be a saját jelszavad
    database: 'pandaplug1'
});

export default pool;
