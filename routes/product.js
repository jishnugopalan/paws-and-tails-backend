var express = require('express'),
routes = express.Router()
var productController=require('../controller/product')
routes.post('/product',productController.addUser)
routes.post('/getproductbycategory',productController.getProductByCategory)
routes.post('/getproductbysubcategory',productController.getProductBySubCategory)
routes.post('/getproductbyshopid',productController.getProductByShopId)
routes.post('/getproductbyid',productController.getProductById)
routes.post('/deleteproductbyid',productController.deleteProductById)
routes.post('/updateproductprice',productController.updateProductPrice)
routes.post('/updateproductstock',productController.updateProductStock)

routes.post('/addtocart',productController.addToCart)
routes.post('/getcartbyuserid',productController.getCartByUserid)
routes.post('/getcartbycartid',productController.getCartByCartid)
routes.post('/deletecart',productController.deleteCartItem)

module.exports = routes
