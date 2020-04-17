const express = require('express');
const burger = require('../models/burgers');
const router = express.Router();


router.get('/', (req, res) => {
    burger.all(data => {
        let burgerIdeas = [];
        let burgersEaten = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].devoured) {
                burgersEaten.push(data[i]);
            } else {
                burgerIdeas.push(data[i]);
            }
        }
        let allBurgers = {
            burgerIdeas: burgerIdeas,
            burgersEaten: burgersEaten
        }
        console.log(allBurgers)
        res.render('index', allBurgers)
        // res.json(allBurgers)
    })
})


module.exports = router;