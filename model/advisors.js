var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var advisorSchema=mongoose.Schema({

    advisorid:{
        type: ObjectId,
        required: true,
    },   
    designation:{
        type:String,
        required: true,
    },
    photo:{
        type:String,
        required: true,
    }
})
module.exports=mongoose.model("Advisor",advisorSchema);