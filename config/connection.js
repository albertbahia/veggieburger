var mysql = require("mysql");
var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-03.cleardb.net/heroku_3b830081a93023d?reconnect=true',
  user     : 'bc162d348b0b12',
  password : 'a520eb56',
  database : 'veggieburger'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
