var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static');
var morgan = require('morgan');

var app = connect();

app.use(morgan('dev'));
app.use(serveStatic("app"));

http.createServer(app).listen(3000);
