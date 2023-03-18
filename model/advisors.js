var mongoose = require("mongoose");
var advisorSchema=mongoose.Schema({
    advisorid:{
        type: String,
        required: true
        
    },
    designation:{
        type: String,
        required: true
        
    },
        photo:{
        type:String,
        required: true,
        

    }
    })
    module.exports=mongoose.model("Advisor",advisorSchema);