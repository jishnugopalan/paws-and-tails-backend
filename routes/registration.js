var express = require('express'),
routes = express.Router()
var userController=require('../controller/registration')
routes.post('/register',userController.addUser)
routes.post('/login',userController.login)
module.exports = routes