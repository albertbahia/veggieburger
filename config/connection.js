var mysql = require('mysql');
var connection = mysql.createConnection({
  port: process.env.JAWSDB_URL,
  host: 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'uaax750h569k46ex',
   password: 'bi40472bvwxs93oe',
   database: 'xgiyu6ba2wzk2zzb'
});

connection.connect();
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

console.log('The solution is: ', rows[0].solution);
});
connection.end();

module.exports = connection;
