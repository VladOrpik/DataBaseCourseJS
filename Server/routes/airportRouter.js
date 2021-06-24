const Router = require('express');
const router = new Router();
const airportController = require('../controllers/airportController');
const checkRole = require('../middleware/checkRoleMiddleWare');

router.post('/',checkRole('ADMIN'),airportController.create);

router.get('/',airportController.getAll);
router.get('/:id',airportController.getOne);// для получения конкретного аэропорта
router.delete('/:id',checkRole('ADMIN'),airportController.deleteOne);
router.put('/:id', airportController.changeOne);
module.exports = router;