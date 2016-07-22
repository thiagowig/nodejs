var express = require('express');
var router = express.Router();
var videodata = require('../videodata');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    name: 'Thiago Fonseca',
    videodata: videodata 
  });
});

module.exports = router;


