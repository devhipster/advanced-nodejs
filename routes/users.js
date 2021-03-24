
const {User,validateUser} = require('../models/users.model');
const mongoose =require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const _ = require('lodash')
router.post('/',async (req,res)=>{
    const {error} = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findById({email:req.body.email})
    if (user) return res.status(400).send('user Already registered');
    user = new User({...req.body});
    let salt = await bcrypt.genSalt(10);
    let hashed =await  bcrypt.hash(req.body.password,salt);
    user.password = hashed;
    await user.save();
    res.json(
        _.pick(user,['name','email'])

    )
})


module.exports = router;