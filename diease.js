const mongoose = require('mongoose');
//create schema for symptoms
var userSchema = new mongoose.Schema({
    symptoms: {
        type: String,
        required: true
    },
})
var Disease = mongoose.model('disease', userSchema)
module.exports = Disease;
//this coded maded by anas 