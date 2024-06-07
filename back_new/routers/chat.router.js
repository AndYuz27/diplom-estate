const Router = require('express')
var cors = require('cors')
const router = new Router()
const ChatController = require('../controllers/chatContr')

router.get('/chat/msg_cl_last/:id', cors(), ChatController.getMessagesLastByID)
router.get('/chat/msg/:id', cors(), ChatController.getMessagesByUUID)
router.get('/chat/msg_new/:id', cors(), ChatController.StartChat)
router.get('/chat/msg_list/:id', cors(), ChatController.ChatlistClient)
router.get('/chat/msg_list_empl/', cors(), ChatController.ChatlistEmpl)
router.get('/chat/msg_list_empl/', cors(), ChatController.ChatlistEmpl)
router.post('/chat/msg/', cors(), ChatController.SetMessage)

module.exports = router