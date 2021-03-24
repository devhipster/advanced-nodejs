const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
const config =  require('config');
const mutler =require('multer');
const app = express();
const logger = require('debug')('db-outcome');
const httpResponse =require('debug')('http-res')
const path = require('path');
const { genreRoute } = require('./routes/genre');
const customerRoute =  require('./routes/customer');
const port = process.env.PORT || 5500;

app.use('/api/genres',genreRoute);
app.use('/api/customer',customerRoute);
app.get('',async(req,res)=>{
    httpResponse('Redirecting to vidly api')
    res.redirect('/api/vidly');
})
app.set(express.json());
app.set(express.urlencoded({extended:true}))
app.set(express.static('public'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname+'views'));
logger('hey')
app.listen(`${port}`,()=>{
    console.log(`Listening on port ${port}`);
})

module.exports ={
    logger: logger
}