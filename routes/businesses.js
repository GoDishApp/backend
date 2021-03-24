const router = require('express').Router();
const businessesController = require('../controllers/businessesController');

router.get('/businesses', businessesController.showBusinesses);

router.get('/', (req, res) => {
    res.redirect('/businesses')
});

router.get('/businesses/business', businessesController.showRandomBusiness);

router.get('/businesses/business/:id', businessesController.showBusinessById);

module.exports = router;
