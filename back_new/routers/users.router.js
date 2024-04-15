const Router = require('express')
var cors = require('cors')
const router = new Router()
const UserController = require('../controllers/userContr')

//router.put('/company/edit/:id', CompanyController.updComp)
//router.post('/company', CompanyController.createCompany)
router.post('/user', UserController.createUser)
console.log('router is on')
router.get('/user', cors(), UserController.getUsersRstrct)
router.get('/user/:id', cors(), UserController.getUser)
router.get('/user/em/:id', cors(), UserController.getUserByEmail)
// router.delete('/ad/:id', CompanyController.delAd)

module.exports = router