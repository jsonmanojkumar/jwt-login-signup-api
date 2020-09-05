var express = require('express');
var router = express.Router();

var db=require('../Database/db');


/* GET users listing. */
router.get('/',function(req, res, next) {
    res.json({name: 'Watch'});
});

module.exports = router;
