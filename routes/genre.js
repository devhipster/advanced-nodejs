const express = require('express');
const genreRouter = express.Router();
const { genre } = require('../models/genre.model');
const Joi = require('joi');
const {getAll} = require('../controllers/genre.controller');


genreRouter.get('',async (req,res)=>{
    const outcome  = await genre.find({});
if (!outcome)return response.status(403).send('Theres not content to show');
res.send(outcome);
})

genreRouter.get(':id',async (req,res)=>{
   const outcome = await genre.findOne({_id:id});
    if(!outcome) return res.status(403).res('theres not contetn to show')
    res.send(outcome);
})

genreRouter.post('',async (req,res)=>{
    const newSet = new genre({
        ...req.body
    })
    await newSet.save()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        res.json(error)
    })
    ;
    // res.send(newSet);
    res.json(newSet)
})

genreRouter.put(':id',async (req,res)=>{
    const outcome = await genre.findByIdAndUpdate(
        req.params.id,
        {name:req.body.name},
        {new:true});
    
    if(!outome){
        res.status(403).json({error:'failed'})
    }
    res.json(outcome)
})

genreRouter.delete(':id',async (req,res)=>{
    const remSet = await genre.findOneAndDelete({_id:id});
    res.json(remSet)
})

async function listGenres(){
   const outcome = await  genre.find();
   console.log(outcome)
}

module.exports = { genreRoute: genreRouter }