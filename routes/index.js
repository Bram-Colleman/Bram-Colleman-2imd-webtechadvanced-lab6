var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/updatestats', (req, res, next) => {
  res.render('updatestats');
});

module.exports = router;
