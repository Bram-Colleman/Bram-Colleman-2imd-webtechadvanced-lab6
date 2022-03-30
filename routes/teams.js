const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teams');



router.get('/', teamsController.get);

router.get('/updatestats', (req, res, next) => {
    res.render('updatestats');
  });
router.post('/updatestats', teamsController.update);
// router.put('/updatestats', teamsController.update);





module.exports = router;
