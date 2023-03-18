var User=require('../model/shop')
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
            let shop=new User(req.body)
            user.save((err,newUser)=>{
                if(err){
                return res.status(404).json({error:"Error in inserting data"})
                }
                else{
                    return res.status(201).json({newUser})
                }
            })
        }
    })
}