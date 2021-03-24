const { FormatAlignJustifyOutlined } = require('@material-ui/icons');
var Joi = require('joi');
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type: String,required:true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    }
});
const User = mongoose.model('User', userSchema);

function validateUser(user){
    const schema = {
        email: Joi.string().min(2).required().email(),
        password: Joi.string().required(),
        name: Joi.string().min(5).max(50).required()
    }

    return Joi.validate(user,schema); 

}
module.exports = {User,validateUser};
