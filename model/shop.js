var mongoose = require("mongoose");
const {ObjectId}=require("mongodb")
var shopSchema=mongoose.Schema({
    user:{
        type: ObjectId,
        required: true,
        ref:"User"
    },
    shopname:{
        type: String,
        required: true,
    },
    shoplicenseno:{
        type:String,
        required:true,
        unique: true
    },
    shopemail:{
        type:String,
        required:true,
        unique: true
    },
    shopphone:{
        type:Number,
        required:true,
        unique: true
    },
    shopdistrict:{
        type:String,
        required: true,
    },
    shopplace:{
        type:String,
        required: true,
    },
    
    shoppincode:{
        type:Number,
        required: true,
    },
    shoppic:{
        type:String,
        
    },
      
})
module.exports=mongoose.model("Shop",shopSchema);