var User=require('../model/registration')
var Question=require('../model/question')
const {ObjectId}=require("mongodb")

exports.addAdviser=(req,res)=>{
    User.findOne({$or:[{email:req.body.email},{phone:req.body.phone}]},(err,user)=>{
        if(err){
            return res.status(404).json({error:"Error in fetching email"})
        }
        else if(user){
            return res.status(404).json({error:"User already exist"})
        }
        else{
            let Newuser=User(req.body)
            Newuser.save((err,newUser)=>{
                if(err){
                    return res.status(404).json({error:err})
                }
                else{
                    return res.status(201).json(newUser)
                
                }
                
            })       
        }
    })
}

exports.viewAllAdviser=(req,res)=>{
    User.find({usertype:"adviser"},(err,adviser)=>{
        if(err){
            return res.status(404).json({error:err})
        }
        else{
            return res.status(201).json(adviser)
        
        }
    })
}
exports.viewAdviserByUserid=(req,res)=>{
    User.findOne({_id:ObjectId(req.body.userid)},(err,adviser)=>{
        if(err){
            return res.status(404).json({error:err})
        }
        else if(adviser){
            return res.status(201).json(adviser)
        
        }
    })
}
exports.addQuestion=(req,res)=>{
    let newQues=Question(req.body)
    newQues.save((err,ques)=>{
        if(err){
            return res.status(404).json({error:err})
        }
        else if(ques){
            return res.status(201).json(ques)
        
        }

    })
}
exports.sendReply=(req,res)=>{
    Question.findOne({_id:ObjectId(req.body.questionid)},(err,ques)=>{
        if(ques){
            if(ques.answer==null){
                Question.updateOne({_id:ObjectId(req.body.questionid)},{
                    $set:{
                        answer:req.body.answer
                    }
                }).exec((err,ques)=>{
                    if(err){
                        return res.status(404).json({error:err})
                    }
                    else if(ques){
                        return res.status(201).json(ques)
                    
                    }
                })
            }
            else{
                return res.status(404).json({msg:"Answer already added"})
            }
        }
    })
}
exports.viewQuestionByAdviser=(req,res)=>{
    Question.find({adviser:ObjectId(req.body.userid)}).populate("user").exec((err,ques)=>{
        if(err){
            return res.status(404).json({error:err})
        }
        else if(ques){
            return res.status(201).json(ques)
        
        } 
    })
}
exports.viewQuestionByCustomer=(req,res)=>{
    Question.aggregate([
        {
            $lookup:{
               from:"users",
               localField:"adviser",
               foreignField:"_id",
               as:"adviser"
            }
        },
       {
        $match:{
            "user":ObjectId(req.body.userid)
        }
       }
       
    ]).exec((err,ques)=>{
        if(err){
            return res.status(404).json({error:err})
        }
        else if(ques){
            return res.status(201).json(ques)
        
        } 
    })
    // Question.find({user:ObjectId(req.body.userid)}).exec((err,ques)=>{
    //     if(err){
    //         return res.status(404).json({error:err})
    //     }
    //     else if(ques){
    //         return res.status(201).json(ques)
        
    //     } 
    // })
}
exports.getQuestionById=(req,res)=>{
    Question.findOne({_id:ObjectId(req.body.questionid)}).populate("user").exec((err,ques)=>{
        if(err){
            return res.status(404).json({error:err})
        }
        else if(ques){
            return res.status(201).json(ques)
        
        } 
    })
}

