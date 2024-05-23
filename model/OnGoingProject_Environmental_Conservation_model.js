const mongoose = require('mongoose');

const OnGoingProject_Environmental_ConservationSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,

});


const Item = mongoose.model('OnGoingProject_Environmental_Conservation', OnGoingProject_Environmental_ConservationSchema);
module.exports = Item;

