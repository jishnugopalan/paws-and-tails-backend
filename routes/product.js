var express = require('express'),
routes = express.Router()
var productController=require('../controller/product')
routes.post('/product',productController.addUser)
module.exports = routes