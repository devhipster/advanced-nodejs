const {User,validateUser} = require('../models/users.model');
const mongoose =require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const _ = require('lodash')
router.post('/',async (req,res)=>{
    const {error} = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email:req.body.email})
    if (!user) return res.status(400).send('user Already registered');
   
     const validPassword = bcrypt.compare(req.body.password,user.password)
     if(!validPassword) return res.status(400).send('Invalid password')
     res.sedn(validPassword)
})


module.exports = router;