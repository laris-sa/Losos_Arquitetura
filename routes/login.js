// login.js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Página de Login' });
});

router.post('/', function(req, res, next) {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.redirect('/admin');
  } else {
    console.log('Login falhou');
    res.redirect('/login');
  }
});

module.exports = router;
