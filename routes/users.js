const router = require('express').Router();
const usersController = require('../controllers/usersController');

router.post('/', usersController.create);

router.post('/login', usersController.login);

module.exports = router;
