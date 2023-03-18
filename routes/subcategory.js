var express = require('express'),
routes = express.Router()
var subcategoryController=require('../controller/subcategory')
routes.post('/subcategory',subcategoryController.addUser)
module.exports = routes