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

    updateEaten: (table, newValue, column, condition, cb) => {
        connection.query('UPDATE ?? SET ? WHERE ??=?', [table, newValue, column, condition], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    updateHide: (table, newValue, column, condition, cb) => {
        connection.query('UPDATE ?? SET ? WHERE ??=?', [table, newValue, column, condition], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
};



module.exports = orm;