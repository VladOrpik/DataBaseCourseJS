const Router = require('express');
const router = new Router();
const flightController = require('../controllers/flightController');
const checkRole = require('../middleware/checkRoleMiddleWare');

router.post('/',checkRole('ADMIN'),flightController.create);
router.get('/',flightController.getAll);
router.get('/:id',flightController.getOne);// для получения конкретного рейса
router.delete('/:id',checkRole('ADMIN'), flightController.deleteOne);
router.put('/:id', checkRole('ADMIN'),flightController.changeOne);

module.exports = router;