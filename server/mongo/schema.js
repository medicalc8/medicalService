const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const medicSchema = new mongoose.Schema({
  title: String,
  author: String,
  imageUrl: String,
  body: String,
  views: {type: Number, default: 0}
}, 
  {
    timestamps: true
  }
);

const Medic = mongoose.model('medic', medicSchema);

module.exports = Medic;
