var express = require('express'),
routes = express.Router()
var userController=require('../controller/registration')
routes.post('/register',userController.addUser)
routes.post('/login',userController.login)
routes.post('/getuser',userController.findUser)
module.exports = routes