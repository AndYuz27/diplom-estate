const Router = require('express')
var cors = require('cors')
const router = new Router()
const ObjectController = require('../controllers/objectContr')
console.log('router is on')


// router.post('/object', ObjectController.createUser)
router.get('/object', cors(), ObjectController.getObjects)
router.get('/object/:id', cors(), ObjectController.getObject)
router.get('/object/sep/:id', cors(), ObjectController.getSeparateObject)
router.delete('/object/:id', ObjectController.delObject)

module.exports = router