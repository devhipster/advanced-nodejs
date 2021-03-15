const mongoose = require('mongoose');
const genreSchema = require('./genre.model')
const movieSchema = new mongoose.Schema({
    title: String,
    genere: genreSchema,
    numberInStock: Number,
    dailyRentalRate:Number
})

module.exports = mongoose.Model('Movie',movieSchema);
module.exports = movieSchema;