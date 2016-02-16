var connection = require("./connection.js");
var orm = {
selectWhole: function(ormcallback) {
var s = 'SELECT * FROM vbtable WHERE devoured = false ORDER BY id ASC';
connection.query(s, function(err, queryresult) {
if (err) throw err;
ormcallback(queryresult);
});
},    
selectEaten: function(ormcallback) {
var s = 'SELECT * FROM vbtable WHERE devoured = true ORDER BY id DESC';
connection.query(s, function(err, queryresult) {
if (err) throw err;
ormcallback(queryresult);
});
},
addBurger: function(bname, ormcallback) {
var s = 'INSERT INTO vbtable (burger_name, devoured) VALUES (?, ?)';
connection.query(s, [bname, true], function(err, queryresult) {
if (err) throw err;
ormcallback(queryresult);
});
},

eatBurger: function(bname, ormcallback) {
var s = 'UPDATE vbtable SET devoured = false  WHERE burger_name = (?)';
connection.query(s, [bname], function(err, queryresult) {
if (err) throw err;
ormcallback(queryresult);
});
}


};
module.exports = orm;
