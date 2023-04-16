var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var subcategorySchema=mongoose.Schema({

    category:{
        type: ObjectId,
        ref: "Category",
        required: true,
    },   
    subcategory:{
        type:String,
        required: true,
    }
})
module.exports=mongoose.model("Subcategory",subcategorySchema);