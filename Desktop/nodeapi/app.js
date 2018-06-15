var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var task=require('./routes/task_router');
var product=require('./routes/product_router');
var student=require('./routes/student_router');
var cateogry=require('./routes/cateogry_router');
var user=require('./routes/login_router');
var signup=require('./routes/signup_router');
var viewprofile=require('./routes/viewprofile_router');
var editprofile=require('./routes/editprofile_router');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todo',task);
app.use('/product',product);
app.use('/student',student);
app.use('/cateogry',cateogry);
app.use('/user',user);
app.use('/signup',signup);
app.use('/viewprofile',viewprofile);
app.use('/editprofile',editprofile);
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
