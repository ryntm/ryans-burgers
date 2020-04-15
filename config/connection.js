const mysql = require('mysql');
let connection = '';

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'passwordR',
        database: 'flavortown'
    })
}

connection.connect((err) => {
    if (err) {
        console.log('Connection error: '+err)
    } else {
        console.log('Connected to DB');
    }
})

module.export = connection