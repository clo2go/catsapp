var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
// window port environment
var PORT = process.env.PORT || 3000;
// JAWSdb server envrionment
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
  	host: 'localhost',
  	user: 'root',
  	password: 'utboot',
  	database: ''
  });
};

connection.connect(function(err) {
	if(err) {
		console.log('error connecting: ' + err.stack);
		return;
	};

	console.log('connected as id ' + connection.threadId);
});



// Starting our express server
app.listen(PORT, function() {
  console.log("App chopping through the " + PORT +);
});
