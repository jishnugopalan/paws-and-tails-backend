require("dotenv").config();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const express = require('express')
const app = express()
const port = 3000
var userroute = require('./routes/registration')
var categoryroute = require('./routes/category')
var subcategoryroute = require('./routes/subcategory')
var productroute = require('./routes/product')
var orderroute=require('./routes/order')
var shoproute=require('./routes/shop')
var adviser=require('./routes/advisors')
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() => {
  console.log("DB CONNECTED");
  });
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())
app.use(bodyParser.json({limit:'10mb'}))
app.use(cookieParser())
app.use(cors())
app.use('/api', userroute)
app.use('/api', categoryroute)
app.use('/api', subcategoryroute)
app.use('/api', productroute)
app.use('/api',orderroute)
app.use('/api',shoproute)
app.use('/api',adviser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})