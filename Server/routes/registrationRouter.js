const Router = require('express');
const router = new Router();
const registrationController = require('../controllers/registrationController');
router.post('/',registrationController.create);
router.get('/',registrationController.getAll);

module.exports = router;