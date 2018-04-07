const router = require('express').Router()
const v1Controller = require('../controllers/v1Controller')

router.get('/', v1Controller.getVersion)
router.get('/:json', v1Controller.getLatest)

module.exports = router;
