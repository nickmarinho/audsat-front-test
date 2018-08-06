var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send('API home page');
  console.log('API home page');
});

module.exports = router;
