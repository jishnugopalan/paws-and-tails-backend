var Category=require('../model/category')
const { ObjectId } = require('mongodb');

exports.addUser=(req,res)=>{
    console.log(req.body)
   // req.body.landholderid=ObjectId(req.body.landholderid)
    let category=Category(req.body)
    category.save((err,newUser)=>{
        if(err){
        return res.status(404).json({error:"Error in inserting data"})
        }
        else{
            return res.status(201).json(newUser)
        }
    })

}
exports.getAllCategories=(req,res)=>{
    console.log(req.body)
    Category.find({},(err,category)=>{
        if(err){
            return res.status(404).json({"error":"Error in fetching categories"})
        }else if(category){
            return res.status(201).json(category)
        }

    })
}
exports.getCategoryById=(req,res)=>{
    Category.find({_id:ObjectId(req.body.categoryid)},(err,category)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching category"})
        else if(category)
        return res.status(201).json(category)
    })
}