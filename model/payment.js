var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var paymentSchema=mongoose.Schema({
    order:{
        type:ObjectId,
        ref:'Order'

    },
    product:{
        type:ObjectId,
        ref:'Product'
    },
    customerid:{
        type:ObjectId,
        ref:'User'
    },
    //vendorid
    user:{
        type:ObjectId,
        ref:'User'
    },
    payment_option:{

        type:String
    },

    payment_status:{
        type:String
    },
    timestamp:{
        type:String,
        default:Date.now
    }
})
module.exports=mongoose.model("Payment",paymentSchema)
