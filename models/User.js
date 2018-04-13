const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    avatar:{type:String},
    role:{type:String,default:'user'},
    lastName:{type:String,default:''},
    fullname:{type:String,default:''},
});

module.exports = mongoose.model("User",User);