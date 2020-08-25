var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const http = require('http');

let app = http.createServer((req, res) => {
  // Set a response type of plain text for the response
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send back a response and end the connection
  res.end('Hello World!\n');
});
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

module.exports = app;
