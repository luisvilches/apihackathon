const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Types = new Schema({
    types:[{type:String,default:[]}]
});

module.exports = mongoose.model("Types",Types);