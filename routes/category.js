var express = require('express'),
routes = express.Router()
var categoryController=require('../controller/category')
routes.post('/category',categoryController.addUser)
routes.post('/getallcategory',categoryController.getAllCategories)
routes.post('/getcategorybyid',categoryController.getCategoryById)



module.exports = routes