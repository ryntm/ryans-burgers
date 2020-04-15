const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


let routes = require("./controllers/burgers_controller.js");



app.use(routes)


app.listen(PORT, () => {
    console.log('Listening on port 8080')
})