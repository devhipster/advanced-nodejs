const mongoose =require('mongoose');
var connect = mongoose.connect('mongodb://localhost/hipster-db')
.then( ()=>{
  console.log('successfully connected ')
})
.catch(err=>console.log(err))

console.log(getAllCourses() );
 function getAllCourses(){
  return mongoose.models
}
