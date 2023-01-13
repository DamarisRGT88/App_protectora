const mysql = require('mysql2');

// mysql://user:pass@host:port/databaseName
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Xurros2810.',
    port: 3306,
    database: 'bbdd_madrid_al_rescate'
});

const animalId = 1;

conn.connect((err) => {
    // conn.query('select * from animal', (err, result) => {
    console.log(err);
    //     console.log(result[1]);
    // })

    conn.query('select * from animal where id = ?', [animalId], (err, result) => {
        console.log(result);
    });
});