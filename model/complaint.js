var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var complaintSchema=mongoose.Schema({

    userid:{
        type: ObjectId,
        required: true,
    },   
    complainttitle:{
        type:String,
        required: true,
    },
    complaintdescription:{
        type:String,
        required: true,
    },
    complaintreply:{
        type:String,
        required: true,
    }
    
})
module.exports=mongoose.model("Complaint",complaintSchema);