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
    type:[],
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
            title:String,
            desc:String,
            img:String,
            idJudge:String
        }
    ],
    prizes:[
        {
            title:{type:String},
            description:{type:String}
        }
    ],
    challenge:[
        {
            title:{type:String},
            description:{type:String}
        }
    ],
    critrials:[
        {
            text: {type:String}
        }
    ],
    patnerts:[{type:String,required:true}]

});
Hackathon.plugin(timestamps,  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
module.exports = mongoose.model("Hackathon",Hackathon);