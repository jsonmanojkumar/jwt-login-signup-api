var express = require('express');
var router = express.Router();

var db=require('../Database/db');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({'name':"manoj",'age':'22'});
});

module.exports = router;
