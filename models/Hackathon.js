const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Hackathon = new Schema({
    place:{type:String},
    type:{type:Array},
    invite:{type:Array},
    title:{type:String},
    titleLink:{type:String},
    address:{type:String},
    date:{type:String},
    linkreserv:{type:String},
    overvies:{type:String},
    shedule:String,
    userId:{type:String},
    public:{type:Boolean,default:false},
    banner:{type:String,default:'http://via.placeholder.com/230x230'},
    photoPerfil:{type:String,default:'http://via.placeholder.com/230x230'},
    hakers:{type:Array},

});

module.exports = mongoose.model("Hackathon",Hackathon);