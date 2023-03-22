require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require('express')
const cookieParser = require("cookie-parser");
const cors = require("cors");
var userroute = require('./routes/registration');  
var shoproute = require('./routes/shop');  



const app = express()
const port = 3000
mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE, {
useNewUrlParser: true, 
useUnifiedTopology: true 
})
.then(() => {
console.log("DB CONNECTED");
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', userroute);
app.use('/api', shoproute);




   

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})