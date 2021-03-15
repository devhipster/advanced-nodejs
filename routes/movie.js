const express = require('express');
const movieRoute = express.Router();
const  movieModel =require('../models/movide.model');
const  genreModel = require('../models/genre.model');
const Joi = require('joi');
const movieSchema = Joi.object({
    title: Joi.string(),
    genre: Joi.object(),
    numberInStock: Joi.number(),
    dailyRentalRate: Joi.number()
})

movieRoute.get('',async (req,res)=>{
const movie = await movieModel.find();
res.send(movie);
})
movieRoute.get(':id',async (req,res)=>{
const movie = await movieModel.find({_id: req.params.id});
if(!movie)return res.status(403).send('something went wrong');
res.send(movie)
})
movieRoute.post('',async (req,res)=>{
    const body = { 
        title: req.body.title,
        genre:req.body.genre.id,
        numberInStock: req.body.numStock,
        dailyRentaRate:req.body.daily
    }
    const {error}  = movieSchema.validate(body)
    const movie =  await new movieModel(body);
    movie.save();
    res.send()
  
})
movieRoute.put('',async (req,res)=>{

})
movieRoute.delete('',async (req,res)=>{

})