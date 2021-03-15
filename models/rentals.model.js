const mongoose =require('mongoose');

const Rental = mongoose.model('Rental',new mongoose.Schema({
  customer:{
      type: new mongoose.Schema({
          name:{
              type:String,
              required:true,
              minlength:5,
              maxlength:50
          },
          isGold:{
              type:Boolean,
              default:false
          },
          phone:{
              type:String,
              required:true
          }
      })
  },
  movie:{
      type:new mongoose.Schema({

      })

  },
  dateOut:{
      type:Date,
      required:true,
      default: Date.now
  },
  dateReturned:{
      type:Date
  },
  rentalFee:{
      type:Number,
      min:0
  }
}))