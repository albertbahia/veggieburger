var envs = require('dotenv').config();
var envs1 = require('envs');
var express = require("express");
var methodOverride = require("method-override");
var PORT = process.env.NODE_ENV || 3000;
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var routes = require('./controllers/veggieburger_controller.js');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use('/', routes);
app.engine('handlebars', expressHandlebars({defaultLayout: 'mainlayout'}));
app.set("view engine", "handlebars");

app.listen(PORT);
