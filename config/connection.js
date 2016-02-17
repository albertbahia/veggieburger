var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

var connection = mysql.createConnection({
  host     : 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'r8nbo7is7sjj69mp',
  password : 'el7q31tocxldjlgc',
  database : 'x33whqas8s34mqb9'
});
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();


module.exports = connection;
