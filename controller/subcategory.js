var Subcategory=require('../model/subcategory')
const { ObjectId } = require('mongodb');

exports.addUser=(req,res)=>{
    console.log(req.body)
    req.body.categoryid=ObjectId(req.body.categoryid)
    let subcategory=Subcategory(req.body)
    subcategory.save((err,newUser)=>{
        if(err){
        return res.status(404).json({error:"Error in inserting data"})
        }
        else{
            return res.status(201).json(newUser)
        }
    }) 
}
exports.getAllSubCategory=(req,res)=>{
    console.log(req.body)
    Subcategory.find().populate("category").exec((err,subcategory)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching subcategory"})
        else if(subcategory)
        return res.status(201).json(subcategory)

    })
}
exports.getSubCategoryById=(req,res)=>{
    console.log("inn")
    console.log(req.body)
    Subcategory.find({category:ObjectId(req.body.categoryid)}).populate("category").exec((err,subcategory)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching subcategory"})
        else if(subcategory)
        return res.status(201).json(subcategory)

    })
}