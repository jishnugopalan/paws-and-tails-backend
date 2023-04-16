var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var feedbackSchema=mongoose.Schema({

    userid:{
        type: ObjectId,
        required: true,
    },   
    complaintdescription:{
        type:String,
        required: true,
    },
        
})
module.exports=mongoose.model("Feedback",feedbackSchema);