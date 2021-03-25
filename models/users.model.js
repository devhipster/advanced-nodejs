const jwt  = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:5,
        maxlength:50
    },
    email:{
         type: String,
         required: true,
         minlength: 5,
         maxlength: 255
    },
    password:{
        type: String,
        required:  true
    }
})

userSchema.methods.generateAuthToken = function(){

}

const userModel = mongoose.model('User',userSchema)

function validateUser(body){
    var schema = Joi.object({
        username: Joi.string().min(5).max(255).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(3).required()
    })
    schema.validate(body)
}


exports.User = userModel;
exports.uSchema = userSchema;
exports.validate = validateUser;
// const jwt = require('jsonwebtoken');
// const config = require('config');
// const { FormatAlignJustifyOutlined } = require('@material-ui/icons');
// var Joi = require('joi');
// const mongoose = require('mongoose')
// const userSchema = new mongoose.Schema({
//     name:{
//         type: String,required:true
//     },
//     email:{
//         type: String,
//         required: true
//     },
//     password:{
//         type: String,
//         required:true
//     }
// });
// userSchema.methods.genAthToken = function(){
//     const token = jwt.sign({_id:this._id}, config.get('jwtPrivateKey'))
//     return token;
// }
// const User = mongoose.model('User', userSchema);

// function validateUser(user){
//     const schema = {
//         email: Joi.string().min(2).required().email(),
//         password: Joi.string().required(),
//         name: Joi.string().min(5).max(50).required()
//     }

//     return Joi.validate(user,schema); 

// }
// module.exports = {User,validateUser};
