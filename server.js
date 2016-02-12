var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var session = require("express-session");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 5000;
var app = express();

app.use('/public', express.static('public'));
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set("view engine", "handlebars");

app.listen(PORT);
