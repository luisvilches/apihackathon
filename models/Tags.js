const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let Tags = new Schema({
    tags:[{type:String,default:[]}]
});

module.exports = mongoose.model("Tags",Tags);