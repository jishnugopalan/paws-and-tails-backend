var express = require('express'),
routes = express.Router()
var complaintController=require('../controller/complaint')
routes.post('/complaint',complaintController.addUser)
module.exports = routes