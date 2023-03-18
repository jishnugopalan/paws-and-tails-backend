var mongoose = require("mongoose");
var customerSchema=mongoose.Schema({
    customerid:{
        type: String,
        required: true
        
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
    housename:{
        type: String,
        required: true
        
    },
    pincode:{
        type: String,
        required: true
        
    },
    alternatenumber:{
        type: Number
     
    }
    })
    module.exports=mongoose.model("Customer",customerSchema);