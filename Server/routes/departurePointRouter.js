const Router = require('express');
const router = new Router();
const departurePointController = require('../controllers/departurePointController');
const checkRole = require('../middleware/checkRoleMiddleWare');

router.post('/',checkRole('ADMIN'),departurePointController.create);
router.get('/',departurePointController.getAll);
router.get('/:id',departurePointController.getOne);// для получения конкретной команды
module.exports = router;