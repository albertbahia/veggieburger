var express = require("express");
ar expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var routes = require('./controllers/veggieburger_controller.js');
var PORT = process.env.NODE_ENV || 5000;

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use('/', routes);
app.engine('handlebars', expressHandlebars({defaultLayout: 'mainlayout'}));
app.set("view engine", "handlebars");
app.listen(PORT)
