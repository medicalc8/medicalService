const {Router} = require('express');
const mongoose = require('mongoose');
const mongUri = 'mongodb://localhost/medic';
const db = mongoose.connect(mongoUri);
mongoose.connect('mongodb://localhost/medic',{useNewUrlParser:true});
const admin = new mongoose.Schema({
    username:String,
    password:String
},{collection:'admin'});
module.exports =admin ;
module.exports = db ;