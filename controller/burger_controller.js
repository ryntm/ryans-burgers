const express = require('express');
const burger = require('../models/burgers');
const router = express.Router();


router.get('/', (req, res) => {
    burger.all(data => {
        let burgerIdeas = [];
        let burgersEaten = [];
        let hideBurger = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].hide) {
                hideBurger.push(data[i]);
            } else if (data[i].devoured) {
                burgersEaten.push(data[i]);
            } else {
                burgerIdeas.push(data[i]);
            }
        }
        let allBurgers = {
            burgerIdeas: burgerIdeas,
            burgersEaten: burgersEaten
        }
        // console.log(allBurgers)
        res.render('index', allBurgers)
        // res.json(allBurgers)
    })
})

router.post("/api/", (req, res) => {
    burger.insert(req.body.burger_name, (response) => {
        res.json({id: response.insertId});
    });
})

router.put('/api/eat/:id', (req, res) => {
    burger.updateEaten(true, req.params.id, (response) => {
        if (response.changedRows === 0) {
            console.log('The burger was not eaten.')
        } else {
            res.status(200).end();
            console.log(`Burger #${req.params.id} has been eaten.`)
    }
    })
})

router.put('/api/hide/:id', (req, res) => {
    burger.updateHide(true, req.params.id, (response) => {
        if (response.changedRows === 0) {
            console.log('The burger was not hidden.')
        } else {
            res.status(200).end();
            console.log(`Burger #${req.params.id} has hidden.`)
    }
    })
})



module.exports = router;