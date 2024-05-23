const mongoose = require('mongoose');

const OnGoingProject_Educational_FacilitiesSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,

});


const Item = mongoose.model('OnGoingProject_Educational_Facilities', OnGoingProject_Educational_FacilitiesSchema);
module.exports = Item;

