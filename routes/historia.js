var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('historia', { title: 'Página de historia' });
});

module.exports = router;