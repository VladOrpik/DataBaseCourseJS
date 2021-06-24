const Router = require('express');
const router = new Router();
const seatController = require('../controllers/seatController');
const checkRole = require('../middleware/checkRoleMiddleWare');

router.post('/',checkRole('ADMIN'),seatController.create);
router.get('/',seatController.getAll);
router.get('/:id',seatController.getOne);// для получения конкретного места
module.exports = router;