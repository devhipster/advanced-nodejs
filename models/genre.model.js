const mongoose = require('mongoose');
const config = require('config');
const logger = require('debug')('db-outcome');
var genreModel;
// const genre = require('../routes/genre');
var genreSchema  =  new mongoose.Schema({
    name: { type:String,required: true},
    category: { type:String ,enum: ['action','horror','drama']},
    age: {type: Number,min: 18,max: Number.MAX_SAFE_INTEGER }
});
mongoose.connect(`${config.get('app.dbURL')}`)
.then(()=>{
   
  
})
.catch(anyError=>{logger(`${anyError}`)})

module.exports ={ 
    genre:  //magic happens here
   genreModel = mongoose.model('Gener',genreSchema)
}
module.exports = genreSchema;