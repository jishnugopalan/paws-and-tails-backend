var Product=require('../model/product')
var Cart=require('../model/cart')
const { ObjectId } = require('mongodb');

exports.addUser=(req,res)=>{
    console.log(req.body)
    req.body.shopid=ObjectId(req.body.shopid)
    let product=Product(req.body)
    product.save((err,newUser)=>{
        if(err){
        return res.status(404).json({error:"Error in inserting data"})
        }
        else{
            return res.status(201).json(newUser)
        }
    })
}
exports.getProductByShopId=(req,res)=>{
    Product.find({shopid:req.body.shopid}).populate("category").populate("subcategory").exec((err,product)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching products"})
        else if(product)
        return res.status(201).json(product)
    })
}
exports.getProductByCategory=(req,res)=>{
    Product.find({category:ObjectId(req.body.categoryid)}).populate("category").populate("subcategory").exec((err,product)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching products"})
        else if(product)
        return res.status(201).json(product)
    })
}
exports.getProductBySubCategory=(req,res)=>{
    Product.find({subcategory:ObjectId(req.body.subcategoryid)}).populate("category").populate("subcategory").exec((err,product)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching products"})
        else if(product)
        return res.status(201).json(product)
    })
}
exports.getProductById=(req,res)=>{
    Product.findOne({_id:ObjectId(req.body.productid)}).populate("category").populate("subcategory").exec((err,product)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching products"})
        else if(product)
        return res.status(201).json(product)

    })
}
exports.deleteProductById=(req,res)=>{
    Product.deleteOne({_id:ObjectId(req.body.productid)},(err,delproduct)=>{
        if(err)
        return res.status(404).json({msg:"Error in getting cart data"})
        else if(delproduct)
        return res.status(201).json({msg:"Product removed"})
    })

}
exports.updateProductPrice=(req,res)=>{
    Product.updateOne({_id:ObjectId(req.body.productid)},{
        $set:{
            price:req.body.price
        }
    },(err,updated)=>{
        if(err)
        return res.status(404).json({msg:"Error in updating data"})
        else if(updated)
        return res.status(201).json({msg:"Product price updated"})
    })
}

exports.updateProductStock=(req,res)=>{
    Product.updateOne({_id:ObjectId(req.body.productid)},{
        $set:{
            stock:req.body.stock
        }
    },(err,updated)=>{
        if(err)
        return res.status(404).json({msg:"Error in updating data"})
        else if(updated)
        return res.status(201).json({msg:"Product price updated"})
    })
}

exports.addToCart=(req,res)=>{
    let newCart=Cart(req.body)
    newCart.save((err,cart)=>{
        if(err)
        return res.status(404).json({msg:"Error in inserting data"})
        else if(cart)
        return res.status(201).json(cart)
    })    
}

exports.getCartByUserid=(req,res)=>{
    console.log(req.body)
    Cart.find({user:ObjectId(req.body.userid)}).populate("product").populate("user").exec((err,cart)=>{
        if(err)
        return res.status(404).json({msg:"Error in getting cart data"})
        else if(cart)
        return res.status(201).json(cart)
    })
}
exports.getCartByCartid=(req,res)=>{
    Cart.find({_id:ObjectId(req.body.cartid)}).populate("product").populate("user").exec((err,cart)=>{
        if(err)
        return res.status(404).json({msg:"Error in getting cart data"})
        else if(cart)
        return res.status(201).json(cart)
    })
}

exports.deleteCartItem=(req,res)=>{
    Cart.deleteOne({_id:ObjectId(req.body.cartid)},(err,delcart)=>{
        if(err)
        return res.status(404).json({msg:"Error in getting cart data"})
        else if(delcart)
        return res.status(201).json({msg:"Item removed from cart"})

    })
}


