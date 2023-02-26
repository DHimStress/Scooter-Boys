var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Verbinden mit Mongoose
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://Scooter-Admin:B0RN4P1fUMUxFZSL@ac-g6myqfj-shard-00-00.uporrzq.mongodb.net:27017,ac-g6myqfj-shard-00-01.uporrzq.mongodb.net:27017,ac-g6myqfj-shard-00-02.uporrzq.mongodb.net:27017/?ssl=true&replicaSet=atlas-k8j5hk-shard-0&authSource=admin&retryWrites=true&w=majority');
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => console.error(error.message));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
