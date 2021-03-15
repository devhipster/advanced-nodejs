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
        name:req.body.name,
        category:req.body.category,
        age:req.body.age
    })
    await newSet.save();
    res.send(newSet);
})

genreRouter.put(':id',async (req,res)=>{
    const outcome = genre.updateOne({_id:req.params.id})
    outcome.name = req.body.name;
    outcome.category = req.body.category;
    outcome.age = req.body.age;
})

genreRouter.delete(':id',async (req,res)=>{
    const remSet = await genre.findOneAndDelete({_id:id});
    res.send(remSet);
})

async function listGenres(){
   const outcome = await  genre.find();
   console.log(outcome)
}

module.exports = { genreRoute: genreRouter }