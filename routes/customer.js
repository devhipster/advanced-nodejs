const express = require('express');
const customerRoute  =  express.Router();
const customerModel = require('../models/customer.model');
const Joi = require('joi')

const customerJoi = Joi.object({
    isGold:Joi.boolean(),
    name: Joi.string(),
    phone: Joi.string().min(13)
});


customerRoute.get('',async (req,res)=>{
    const customer = await customerModel.find();
    res.send(customer)
})

customerRoute.get(':id',async (req,res)=>{
    const customerId = await customerModel.findOne({_id:req.params.id});
    if(!customerId)return  res.status(403).send('hey somethin went wrong');
    res.send(customerId);
})

customerRoute.post('',async (req,res)=>{
    const customer = {
        idGold:req.body.gold,
        name: req.body.name,
        phone: req.body.phone
    }
    if({error} = customerJoi.validate(customer)) return res.status(403).send('something went wrong with the data youre providing now ')
    const newCustomer = new customerModel(customer);
     res.send( (await newCustomer).save());
})

customerRoute.put(':id',async (req,res)=>{
  const customer = await customerModel.findOne({_id:req.params.id});
  customer.isGold  = req.body.gold;
  customer.name = req.body.name;
  customer.save();
  res.send(customer);
})

customerRoute.delete(':id',async (req,res)=>{
    const customer = await customerModel.deleteOne({_id:req.params.id});
    customer.save();
    res.send(customer);
})

module.exports = customerRoute; 

