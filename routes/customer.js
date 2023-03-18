var express = require('express'),
routes = express.Router()
var customerController=require('../controller/customer')
routes.post('/customer',customerController.addUser)
module.exports = routes