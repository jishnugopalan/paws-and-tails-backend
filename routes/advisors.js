var express = require('express'),
routes = express.Router()
var customerController=require('../controller/adviser')
routes.post('/addadvisors',customerController.addAdviser)
routes.post('/view-all-adviser',customerController.viewAllAdviser)
routes.post('/view-adviserby-userid',customerController.viewAdviserByUserid)
routes.post('/addquestion',customerController.addQuestion)
routes.post('/sendreply',customerController.sendReply)
routes.post('/view-question-adviser',customerController.viewQuestionByAdviser)
routes.post('/view-question-customer',customerController.viewQuestionByCustomer)
routes.post('/getquestionbyid',customerController.getQuestionById)



module.exports = routes