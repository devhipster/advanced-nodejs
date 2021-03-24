const jwt = require('jsonwebtoken');
const config = require('config');
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
userSchema.methods.genAthToken = function(){
    const token = jwt.sign({_id:this._id}, config.get('jwtPrivateKey'))
    return token;
}
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
