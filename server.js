// Require our dependencies
var express = require('express'),
  exphbs = require('express-handlebars'),
  http = require('http'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  config = require('./config'),
  path = require('path');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

mongoose.Promise = global.Promise;
// Connect to our mongo database
mongoose.connect(config.database_url);

// Set /app/public as our static content dir
app.use("/", express.static(__dirname + "/app/public/"));
app.use(bodyParser());


require('./routes.js')(app);

// Fire it up (start our server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

// Initialize socket.io
var io = require('socket.io').listen(server);
