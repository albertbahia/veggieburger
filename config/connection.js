var settings = require('./settings.js');
var mysql = require('mysql');
console.log(process.env.JAWSDB_URL);
var connection = mysql.createConnection(settings.JAWSDB_URL);
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

console.log('The solution is: ', rows[0].solution);
});
connection.end();
module.exports = connection;
