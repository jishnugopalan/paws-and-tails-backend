var express = require('express'),
routes = express.Router()
var feedbackController=require('../controller/feedback')
routes.post('/feedback',feedbackController.addUser)
module.exports = routes