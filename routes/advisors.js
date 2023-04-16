var express = require('express'),
routes = express.Router()
var customerController=require('../controller/advisors')
routes.post('/advisors',customerController.addUser)
module.exports = routes