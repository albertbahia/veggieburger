var envs = require('dotenv').config();;
var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var routes = require('./controllers/veggieburger_controller.js');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use('/', routes);
app.engine('handlebars', expressHandlebars({defaultLayout: 'mainlayout'}));
app.set("view engine", "handlebars");

app.listen(process.env.NODE_ENV || 3000);
