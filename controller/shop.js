var Shop=require('../model/shop')
const { ObjectId } = require('mongodb');
exports.addUser=(req,res)=>{
    console.log(req.body)
    // Shop.findOne({shopid:req.body.shopid},(err,user)=>{ //find query
    //     let user=new Shop(req.body)
    //         user.save((err,newUser)=>{
    //             if(err){
    //             return res.status(404).json({error:"Error in inserting data"})
    //             }
    //             else{
    //                 return res.status(201).json({newUser})
    //             }
    //         })
    // })
}
exports.getShopByUserid=(req,res)=>{
    Shop.findOne({user:ObjectId(req.body.userid)}).exec((err,shop)=>{
        if(err){
            return res.status(404).json({error:err})
            }
            else{
                return res.status(201).json(shop)
            }
    })
}
exports.getShopDetailsById=(req,res)=>{
    Shop.findOne({_id:ObjectId(req.body.shopid)},{user:1,shopname:1,shopphone:1,shopdistrict:1,shopplace:1,shoppincode:1

        }).populate("user").exec((err,shop)=>{
        if(err){
            return res.status(404).json({error:err})
            }
            else{
                return res.status(201).json(shop)
            }
    })
}