var User=require('../model/registration')
var Shop=require('../model/shop')
var Customer=require('../model/customer')
var Advisor=require('../model/advisors')

const { ObjectId } = require('mongodb');

exports.addUser=(req,res)=>{
    console.log(req.body)
    User.findOne({email:req.body.email},(err,user)=>{ //find query
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
                        user.save((err,newUser)=>{
                            if(err){
                                return res.status(404).json({error:err})
                                    }
                                    else{
                                       req.body.shopid=ObjectId(newUser._id)
                                       let shop=new Shop(req.body)
                                       
                                       shop.save((err,newUser)=>{
                                        if(err){
                                            return res.status(404).json({error:err})
                                            }
                                            else{
                                                msg:"Registration Successfull"
                                                return res.status(201).json({msg:"Registration successful"})  
                                            }
                                       })
                                        }
                            
                            })          
                     }
                     else if(req.body.usertype=="customer")
                     {
                         user.save((err,newUser)=>{
                             if(err){
                                 return res.status(404).json({error:err})
                                     }
                                     else{
                                        req.body.customerid=ObjectId(newUser._id)
                                        let customer=new Customer(req.body)
                                        
                                        customer.save((err,newUser)=>{
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