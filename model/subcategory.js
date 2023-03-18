var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var subcategorySchema=mongoose.Schema({
   
    categoryid:{
        type: ObjectId,
        required: true
        
    },
    subcategory:{
        type: String,
        required: true
        
    }
    })
    module.exports=mongoose.model("Category",categorySchema);