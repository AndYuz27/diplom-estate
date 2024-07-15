const Router = require('express')
var cors = require('cors')
const router = new Router()
const ObjectController = require('../controllers/objectContr')
console.log('router is on')
const db = require('../db');




// router.post('/object', ObjectController.createUser)
router.get('/object', cors(), ObjectController.getObjects)
router.get('/object_emp/:id', cors(), ObjectController.getOjectByEmpl)
router.post('/object', cors(), ObjectController.setObject)
router.get('/service', cors(), ObjectController.getObjectsServe)
router.get('/service/:id', cors(), ObjectController.getObjectServe)
router.get('/object/:id', cors(), ObjectController.getObject)
router.get('/object_aprtsim/:id', cors(), ObjectController.getObjectsBySimlarAprt)
router.get('/object_buy/:id', cors(), ObjectController.getObjectsType)
router.get('/object_img/:id', cors(), ObjectController.getObjectImg)
router.get('/object_cl/:id', cors(), ObjectController.getObjsClient)
router.get('/object/sep/:id', cors(), ObjectController.getSeparateObject)

router.get('/types_est', cors(), ObjectController.getTypesEstate)
router.get('/types_buy', cors(), ObjectController.getTypesBuy)
router.get('/types_bld', cors(), ObjectController.getTypeBuilds)
router.get('/types_bld_ap/:id', cors(), ObjectController.getTypeBuildsAprt)

router.get('/fback/:id', cors(), ObjectController.getFeedbackSingle)
router.post('/fback', cors(), ObjectController.sendFback)

router.delete('/object/:id', ObjectController.delObject)

router.get('/news/', ObjectController.getNews)
router.get('/news/:id', ObjectController.getNewsById)
router.post('/news/', ObjectController.setNews)
router.delete('/news/:id', ObjectController.delNews)

router.get('/fback', cors(), ObjectController.getFeedback)
router.delete('/fback/:id', ObjectController.delFeedback)


//image load
router.get('/img/:id', async (req, res) => {
  try{
    const result = await db.query(
      'SELECT * FROM images WHERE id = $1', 
      [req.params.id]
    )
    res.set('Content-Type', result.rows[0].content_type)
    res.send(result.rows[0].image)
  }catch(err){
    console.log('Ошибка на сервере КОД:', err)
    res.status(404).send('Блять, где файл ёпта!?')

  }

})
router.get('/img_n/:id', async (req, res) => {
  try{
    const result = await db.query(
      'SELECT * FROM images WHERE name = $1', 
      [req.params.id]
    )
    res.set('Content-Type', result.rows[0].content_type)
    res.send(result.rows[0].image)
  }catch(err){
    console.log('Ошибка на сервере КОД:', err)
    res.status(404).send('Блять, где файл ёпта!?')

  }

})

router.get('/img_estate1/:id', async (req, res) => {
  try{
    const result = await db.query(
      'SELECT image1, content_type FROM catalog_estate WHERE id = $1', 
      [req.params.id]
    )
    res.set('Content-Type', result.rows[0].content_type)
    res.send(result.rows[0].image1)
  }catch(err){
    console.log('Ошибка на сервере КОД:', err)
    res.status(404).send('Файла нет')

  }

})
module.exports = router