const router = require('express').Router();
const bodyParser = require('body-parser');
const Business = require('./businesses');
const User = require('./users');

router.use(bodyParser.json());

router.use('/business', Business);
router.use('/user', User);

module.exports = router;
