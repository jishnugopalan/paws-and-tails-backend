var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var shopSchema=mongoose.Schema({
    userid:{
        type: ObjectId,
        required: true,
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