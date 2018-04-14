const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const config = require("../settings");
const Schema = mongoose.Schema;

let Hackathon = new Schema({
    place:{type:String},
    title:{type:String},
    titleLink:{type:String},
    address:{type:String},
    date:{type:String},
    linkreserv:{type:String},
    overvies:{type:String},
    shedule:{type:String},
    userId:{type:String},
    public:{type:Boolean,default:false},
    banner:{type:String,default:'http://via.placeholder.com/230x230'},
    photoPerfil:{type:String,default:''},
    type:[
        {type:String}
    ],
    invite:[
        {type:String}
    ],
    hakers:[
        {type:String,required:true}
    ],
        administrators:[
        {type:String,required:true}
    ],
    judges:[
        {
            userId:{type:String,required:true},
            name:{type:String,required:true},
            job:{type:String,required:true}
        }
    ],
    prizes:[
        {
            img:{type:String},
            lugar:{type:String,required:true},
            rode:{type:Number,required:true}
        }
    ],
    challenge:[
        {
            title:{type:String,required:true},
            content:{type:String,required:true}
        }
    ],
    patnerts:[{type:String,required:true}]

});
Hackathon.plugin(timestamps,  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
module.exports = mongoose.model("Hackathon",Hackathon);