var User=require('../model/registration')
var Shop=require('../model/shop')

var Customer=require('../model/customer')


var jwt= require("jsonwebtoken");
const expressJwt = require("express-jwt");

const { ObjectId } = require('mongodb');

exports.addUser=(req,res)=>{
    console.log(req.body)
    User.findOne({$or:[{email:req.body.email},{phone:req.body.phone}]},(err,user)=>{ //find query
        if(err){
            return res.status(404).json({error:"Error in fetching email"})
        }
        else if(user){
            return res.status(404).json({error:"User already exist"})
        }
        else{
            let user=new User(req.body)

            user.save((err,newUser)=>{
                if(err){
                return res.status(404).json({error:err})
                }
                else{
                    if(req.body.usertype=="shop")
                    {
                       
                        req.body.userid=ObjectId(newUser._id)
                        let shop=new Shop(req.body)
                        
                        shop.save((err,newShop)=>{
                            if(err){
                                return res.status(404).json({error:err})
                                }
                                else{
                                    return res.status(201).json(newShop)  
                                }
                        })
                                        
                            
                                    
                     }
                    
                    else if(req.body.usertype=="customer")
                     {
                        
                        req.body.customerid=ObjectId(newUser._id)
                        let customer=new Customer(req.body)
                        
                        customer.save((err,newCus)=>{
                            if(err){
                                return res.status(404).json({error:err})
                                }
                                else{
                                    return res.status(201).json(newCus)  
                                }
                        })
                                         
                             
                                    
                      }
                      else if(req.body.usertype=="advisor")
                     {
                         user.save((err,newUser)=>{
                             if(err){
                                 return res.status(404).json({error:err})
                                     }
                                     else{
                                        req.body.advisorid=ObjectId(newUser._id)
                                        let advisor=new Advisor(req.body)
                                        
                                        advisor.save((err,newUser)=>{
                                         if(err){
                                             return res.status(404).json({error:err})
                                             }
                                             else{
                                                 return res.status(201).json({msg:"Registration successful"})  
                                             }
                                        })
                                         }
                             
                             })          
                      }
                    
                    }
                }
                        )
                }
            })
        }

exports.login=(req,res)=>{
User.findOne({email:req.body.email,password:req.body.password},(err,user)=>{
    if(err){
        return res.status(404).json({error:"Error in fetching email"})
    }
    else if(user){
        //create token
        const token = jwt.sign({_id:user._id},process.env.SECRET);
        //put token in cookie
        res.cookie("token",token,{expire: new Date()+9999});
        return res.status(201).json({token,user})
    }
    else{
        return res.status(404).json({error:"Invalid email or password"})
    }
}
    )
}
exports.findUser=(req,res)=>{
    console.log(req.body)
    User.findOne({_id:ObjectId(req.body.userid)},(err,user)=>{
        if(err){
            return res.status(404).json({error:"Error in fetching user"})
        }
        else if(user){
            return res.status(201).json(user)
        }
        else{
            return res.status(404).json({"error":"User not found"})
        }
    })
}

 