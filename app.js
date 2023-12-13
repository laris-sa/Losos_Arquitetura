//app.js
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var contatoRouter = require('./routes/contato');
var projetosRouter = require('./routes/projetos');
var historiaRouter = require('./routes/historia');
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(__dirname + '/public'));


app.use('/', indexRouter);
app.use('/contato', contatoRouter);
app.use('/projetos', projetosRouter);
app.use('/historia', historiaRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;

app.listen(3333, function () {
  console.log("Server is running on port 3333");
});