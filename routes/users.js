const {User,validate} = require('../models/users.model');
const mongoose = require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();


router.post('',async (req,res)=>{

    const {error } = validate(...req.body);
    if ( error ) return res.status.send(400).send(error.details[0].message);

    User.findOne({email:req.body.email});
    if(user) return res.status(400).send('User already registered');
    const newUser = new User(...req.body);
    await newUser.save();

    res.send(newUser);


module.exports = router;






// const {User,validateUser} = require('../models/users.model');
// const mongoose =require('mongoose');
// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const config =require('config');

// const _ = require('lodash')
// router.post('/',async (req,res)=>{
//     const {error} = validateUser(req.body);
//     if(error) return res.status(400).send(error.details[0].message);

//     let user = await User.findById({email:req.body.email})
//     if (user) return res.status(400).send('user Already registered');
//     user = new User({...req.body});
//     let salt = await bcrypt.genSalt(10);
//     let hashed = await  bcrypt.hash(req.body.password,salt);
//     user.password = hashed;
//     await user.save();

//     const token  = user.genAuthToken();
//     res.header('x-auth-token',token).send(_pick(user,['_id','email']))
// })


// module.exports = router;