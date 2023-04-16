var mongoose = require("mongoose");
const {ObjectId}=require("mongodb")
var OrderSchema=mongoose.Schema({
    product:{
        type:ObjectId,
        ref:'Product'
    },
    user:{
        type:ObjectId,
        ref:'User'
    },
    vendorid:{
        type:ObjectId,
    },
    qty:{
        type:Number
    },
    total_price:{
        type:Number
    },
    order_status:{
        type:String,
        default:"order confirmed"
    },
    delevery_option:{
        type:String
    },
    timestamp:{
        type:String,
        default:Date.now
    }
})
module.exports=mongoose.model("Order",OrderSchema)
