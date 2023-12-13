var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contato', { title: 'Página de Contato' });
});

module.exports = router;
