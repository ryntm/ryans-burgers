const connection = require("./connection.js");

let orm = {
    selectAll: (table, cb) => {
        connection.query('SELECT * FROM ??', table, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    insert: (table, column, value, cb) => {
        connection.query('INSERT INTO ?? (??) VALUES (?)', [table, column, value], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    update: (table, newValue, column, criteria, cb) => {
        connection.query('UPDATE ?? SET ? WHERE ??=?', [table, newValue, column, criteria], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;