const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let Projects = new Schema({
    name:String,
    titleLink:String,
    hackathonId:String,
    stract:String,
    hackers:[],
    description:String,
    feedback:String,
    website:String,
    skills:[],
    image:String,
    socials:{
        facebook:{type:String,default:''},
        twitter:{type:String,default:''},
        linkedin:{type:String,default:''},
        other:{type:String,default:''}
    }
});


Projects.plugin(timestamps,  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
module.exports = mongoose.model("Projects",Projects);