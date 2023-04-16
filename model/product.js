var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var productSchema=mongoose.Schema({

    shopid:{
        type: ObjectId,
        required: true,
    },   
    productname:{
        type:String,
        required: true,
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    subcategory:{
        type: ObjectId,
        ref:"Subcategory",
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    stock:{
        type:Number,
        required: true,
    },
    image:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    }
})
module.exports=mongoose.model("Product",productSchema);