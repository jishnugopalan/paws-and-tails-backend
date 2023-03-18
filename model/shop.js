var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var shopSchema=mongoose.Schema({
    shopid:{
        type:ObjectId,
        required:true
    },
    shopname:{
        type: String,
        required: true
       
    },
    
   shoplicenseno:{
        type:String,
        required:true,
        unique: true
    },
  shopemail:{
        type:String,
        required: true,
        unique:true
    },
    shopcontact:{
        type:Number,
        required: true,
        unique:true
    },
    country:{
        type: String,
        required: true
        
    },
    state:{
        type:String,
        required: true,
        unique: true
    },
    district:{
        type: String,
        required: true
        
    },
    city:{
        type: String,
        required: true
        
    },
    landmark:{
        type: String,
        required: true
        
    },
    
    pincode:{
        type: Number,
        required: true
        
    },
    logo:{
        type: String,
        required: true
        
    },
    proof:{
        type: String,
        required: true
        
    },
    


})
module.exports=mongoose.model("Shop",shopSchema);