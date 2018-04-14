const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let User = new Schema({
    name:{type:String,required:true},
    username:{type:String},
    invite:[
        {type:String}
    ],
    email:{type:String,required:true},
    password:{type:String,required:true},
    avatar:{type:String},
    role:{type:String,default:'user'},
    lastName:{type:String,default:''},
    fullname:{type:String,default:''},
    description:{type:String,default:''},
    location:{type:String,default:''},
    socials:{
        facebook:{
            name:{type:String},
            url:{type:String}
        },
        twitter:{
            name:{type:String},
            url:{type:String}
        },
        linkedin:{
            name:{type:String},
            url:{type:String}
        },
        other:{
            name:{type:String},
            url:{type:String}
        }
    }

});

User.plugin(timestamps,  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
module.exports = mongoose.model("User",User);