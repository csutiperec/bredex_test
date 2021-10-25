const express = require('express');
const teams_controller = require('../Controllers/teams_controller');
const router = express.Router();
const auth = require('../Middleware/auth');

router.get('/', teams_controller.getAll);
router.get('/:id', teams_controller.getOne);
router.post('/', auth, teams_controller.addOne);
router.put('/:id', auth, teams_controller.modifyOne);
router.delete('/:id', auth, teams_controller.deleteOne);

module.exports = router;