const Order=require("../model/order")
const Payment=require("../model/payment")
const Product=require("../model/product")
const {ObjectId}=require("mongodb")
const Customer=require("../model/customer")

exports.createOrder=(req,res)=>{
   
    let newOrder=Order(req.body)
    newOrder.save((err,order)=>{
    if(err)
    return res.status(404).json({msg:"Error in create order"})
    if(order)
    return res.status(201).json(order)

    })
  
  
}

exports.cancelOrder=(req,res)=>{
    Order.updateOne({_id:req.body.orderid},{
        $set:{
            order_status:"cancelled"
        }
    },(err,delorder)=>{
        if(err)
        return res.status(404).json({msg:"Error in cancel order"})
        if(delorder)
        return res.status(201).json({msg:"Order cancelled successfully"})

    })
}

//productid,orderid,stock
exports.startPayment=(req,res)=>{
    req.body.order=ObjectId(req.body.order)
    let newPayment=Payment(req.body)
    Product.updateOne({_id:ObjectId(req.body.product)},{
        $inc: { stock: -(parseInt(req.body.qty))} 
    },(err,updated)=>{
        if(err)
        return res.status(404).json({msg:err})
        else if(updated){
            newPayment.save((err,payment)=>{
                if(err)
                return res.status(404).json({msg:err})
                if(payment){
                   // return res.status(201).json(payment)
                    Order.updateOne({_id:ObjectId(req.body.order)},{
                        $set:{
                            order_status:"Payment Completed"
                        }
                    }).exec((err,upd)=>{
                        if(err)
                        return res.status(404).json({msg:"Error in payment"})
                        else if(upd)
                        return res.status(201).json({msg:"Payment completed"})
                    })
                }
                
            })

        }
       
    })
    
}

exports.viewOrderByCustomerId=(req,res)=>{
    Order.find({customerid:ObjectId(req.body.userid)}).populate("product").exec((err,order)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching order"})
        if(order){
            return res.status(201).json(order)
        }
    })
}
exports.viewOrderByVendorId=(req,res)=>{
    Order.find({vendorid:ObjectId(req.body.userid)}).populate("product").exec((err,order)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching order"})
        if(order){
            return res.status(201).json(order)
        }
    })
}
exports.viewOrderById=(req,res)=>{
    Order.findOne({_id:ObjectId(req.body.orderid)}).populate("product").populate("user").exec((err,order)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching order"})
        if(order){
            return res.status(201).json(order)
        }
    })
}
exports.viewPaymentByCustomer=(req,res)=>{
    Payment.find({customerid:ObjectId(req.body.userid)}).populate("product").populate("order").exec((err,pay)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching payment details"})
        if(pay){
            return res.status(201).json(pay)
        }
    })
}
exports.viewPaymentByVendor=(req,res)=>{
    Payment.find({user:ObjectId(req.body.userid)}).populate("product").populate("order").exec((err,pay)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching payment details"})
        if(pay){
            return res.status(201).json(pay)
        }
    })
}
exports.viewPaymentByPaymentid=(req,res)=>{
    Payment.find({_id:ObjectId(req.body.paymentid)}).populate("product").populate("order").exec((err,pay)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching payment details"})
        if(pay){
            return res.status(201).json(pay)
        }
    })
}
exports.getCustomerDetails=(req,res)=>{

    Customer.findOne({customerid:ObjectId(req.body.customerid)}).exec((err,customer)=>{
        if(err)
        return res.status(404).json({msg:"Error in fetching customer details"})
        if(customer){
            return res.status(201).json(customer)
        }
    })
}

