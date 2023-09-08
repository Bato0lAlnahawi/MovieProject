const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
 {
  userName:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
  isAdmin:{type:Boolean,required:true},
  adminID:{type: Number },
 },
 { timestamps: true },
)

module.exports = mongoose.model('users', User);