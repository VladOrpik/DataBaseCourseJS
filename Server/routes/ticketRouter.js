const Router = require('express');
const router = new Router();
const ticketController = require('../controllers/ticketController');


router.post('/',ticketController.create);
router.get('/',ticketController.getAll);
router.get('/:id',ticketController.getOne);// для получения конкретного билета
module.exports = router;