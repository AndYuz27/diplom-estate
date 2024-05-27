const Router = require('express')
var cors = require('cors')
const router = new Router()
const ObjectController = require('../controllers/objectContr')
console.log('router is on')
const db = require('../db');




// router.post('/object', ObjectController.createUser)
router.get('/object', cors(), ObjectController.getObjects)
router.post('/object', cors(), ObjectController.setObject)
router.get('/service', cors(), ObjectController.getObjectsServe)
router.get('/service/:id', cors(), ObjectController.getObjectServe)
router.get('/object/:id', cors(), ObjectController.getObject)
router.get('/object_img/:id', cors(), ObjectController.getObjectImg)
router.get('/object/sep/:id', cors(), ObjectController.getSeparateObject)
router.get('/fback', cors(), ObjectController.getFeedback)
router.get('/fback/:id', cors(), ObjectController.getFeedbackSingle)
router.post('/fback', cors(), ObjectController.sendFback)
router.delete('/object/:id', ObjectController.delObject)
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
    res.status(404).send('Блять, где файл ёпта!?')

  }

})
module.exports = router