var express = require('express'),
routes = express.Router()
var advisorController=require('../controller/advisors')
routes.post('/advisor',advisorController.addUser)
module.exports = routes