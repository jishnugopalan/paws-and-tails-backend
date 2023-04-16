var express = require('express'),
routes = express.Router()
var subcategoryController=require('../controller/subcategory')
routes.post('/subcategory',subcategoryController.addUser)
routes.post('/getallsubcategory',subcategoryController.getAllSubCategory)
//routes.post('/getsubcategorybyid',subcategoryController.getAllSubCategory)
routes.post('/getsubcategorybyid',subcategoryController.getSubCategoryById)


module.exports = routes