var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var feedbackSchema=mongoose.Schema({

    userid:{
        type: ObjectId,
        required: true,
    },   
    
    feedbackdescription:{
        type:String,
        required: true,
    }

    
    
})
module.exports=mongoose.model("Complaint",complaintSchema);