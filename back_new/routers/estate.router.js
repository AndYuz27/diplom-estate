const Router = require('express')
var cors = require('cors')
const router = new Router()
const ObjectController = require('../controllers/objectContr')
console.log('router is on')


// router.post('/object', ObjectController.createUser)
router.get('/object', cors(), ObjectController.getObjects)
router.post('/object', cors(), ObjectController.setObject)
router.get('/service', cors(), ObjectController.getObjectsServe)
router.get('/service/:id', cors(), ObjectController.getObjectServe)
router.get('/object/:id', cors(), ObjectController.getObject)
router.get('/object/sep/:id', cors(), ObjectController.getSeparateObject)
router.delete('/object/:id', ObjectController.delObject)

module.exports = router