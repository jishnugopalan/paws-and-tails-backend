var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var shippingSchema=mongoose.Schema({
    paymentid:{
        type:ObjectId,
        ref:"Payments"
    },
    shipping_status:{
        type:String
    },
    timestamp:{
        type:String,
        default:Date.now
    }
})
module.exports=mongoose.model("Shipping",shippingSchema)