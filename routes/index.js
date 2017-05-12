var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//get about page
router.get('/about', function(req, res, next){
  res.render('about')
})

//get portfolio page
router.get('/portfolio', function(req, res, next){
  res.render('portfolio')
})
module.exports = router;
