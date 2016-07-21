var express = require('express');
var router = express.Router();

/* GET about. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'About',
    name: 'Mim quer tocar' 
  });
});

module.exports = router;
