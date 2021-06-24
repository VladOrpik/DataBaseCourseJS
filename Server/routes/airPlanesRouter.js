const Router = require('express');
const router = new Router();
const airplaneController = require('../controllers/airPlaneController');
const checkRole = require('../middleware/checkRoleMiddleWare');

router.post('/',checkRole('ADMIN'),airplaneController.create);
router.get('/',airplaneController.getAll);
router.get('/:id',airplaneController.getOne);// для получения конкретного самолета
router.delete('/:id',checkRole('ADMIN'),airplaneController.deleteOne);
router.put('/:id',checkRole('ADMIN'), airplaneController.changeOne);

module.exports = router;