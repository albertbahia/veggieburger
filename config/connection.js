var mysql = require('mysql');
var connection = mysql.createConnection({
  port: 3306,
  host: 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'lxyj2yrczyglmrt5',
password : 'i77jhyofr1c96avu',
  database : 'o4gau1eljmalaza8'
});
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();


module.exports = connection;
