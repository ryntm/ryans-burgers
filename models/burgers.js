const orm = require('../config/orm');

var burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },

    insert: function (newBurger, cb) {
        orm.insert('burgers', "burger_name", newBurger, function(res){
            cb(res);
        })
    },

    updateEaten: function(eaten, burgerID, cb) {
        let update = {
            "devoured": eaten
        };
        orm.updateEaten("burgers", update, "id", burgerID, (res) => {
            cb(res);
        });
    },

    updateHide: function(hide, burgerID, cb) {
        let update = {
            "hide": hide
        };
        orm.updateHide("burgers", update, "id", burgerID, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;