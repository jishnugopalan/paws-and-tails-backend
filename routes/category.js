var express = require('express'),
routes = express.Router()
var categoryController=require('../controller/category')
routes.post('/category',categoryController.addUser)
module.exports = routes