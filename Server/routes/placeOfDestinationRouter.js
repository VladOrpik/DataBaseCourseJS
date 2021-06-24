const Router = require('express');
const router = new Router();
const placeOfDestinationController = require('../controllers/placeOfDestinationController');
const checkRole = require('../middleware/checkRoleMiddleWare');

router.post('/',checkRole('ADMIN'),placeOfDestinationController.create);
router.get('/',placeOfDestinationController.getAll);
router.get('/:id',placeOfDestinationController.getOne);// для получения конкретной команды
module.exports = router;