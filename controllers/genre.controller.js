// const { genre } = require('../models/genre.model');
// const Joi = require('joi');

// async function getGenres(resonse='empty' ){
// const outcome  = await genre.find({});
// if (!outcome)return response.status(403).send('Theres not content to show');
// res.send(outcome);
// }

// async function getGenre(id){
//  const outcome = await genre.findOne({_id:id});
//  if(!outcome) return res.status(403).res('theres not contetn to show')
//  res.send(outcome);
// }

// async  function postGenre(name,category,age){
//   const newSet = new genre({
//       name,
//       category,
//       age
//   })
//   await newSet.save();
//   res.send(newSet);
// }

// async function deleteGenre(id){
//    const remSet = await genre.findOneAndDelete({_id:id});
//    res.send(remSet);
// }

// async function updateGenre(id,toUpdate){
 
// }

// module.exports = {
//     getAll:getGenres()
// }