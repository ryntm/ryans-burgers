const orm = require('../config/orm');

var burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },

    insert: function (cols, vals, cb) {
        orm.insert('burgers', cols, vals, function(res){
            cb(res);
        })
    },

    eat: function (condition, cb) {
        orm.update ('burgers', condition, function(res){
            cb(res);
        })
    }

};

module.exports = burger;