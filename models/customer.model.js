const mongoose = require('mongoose');

const customerSchema  = new mongoose.Schema({
    isGold: Boolean,
    name:String,
    phone:String
})

module.exports  = mongoose.model('Customer',customerSchema);