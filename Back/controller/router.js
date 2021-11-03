const
  express = require('express'),
  router = express.Router()

// Import Controller messages
const messageController = require ('./controllers/messageController')
router.route('/message/get')
    .get(messageController.get)
router.route('/message')
    .post(messageController.post)
// router.route('/message/delete/:id')
//     .get(messageController.deleteOne)
  




// Routes Article


module.exports = router
