var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var questionSchema=mongoose.Schema({
    user:{
        type:ObjectId,
        ref:"User"
    },
    adviser:{

        type:ObjectId
    },
    question:{
        type:String
    },
    answer:{
        type:String
    },
    timestamp:{
        type:String,
        default:Date.now
    }
})
module.exports=mongoose.model("Question",questionSchema);
