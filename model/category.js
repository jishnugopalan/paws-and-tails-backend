var mongoose = require("mongoose");
var categorySchema=mongoose.Schema({
    categoryid:{
        type: String,
        required: true
        
    },
    category:{
        type: String,
        required: true
        
    }
    })
    module.exports=mongoose.model("Category",categorySchema);