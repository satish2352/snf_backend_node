const mongoose = require('mongoose');

const OnGoingProject_Birthday_CelebrationsSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,

});


const Item = mongoose.model('OnGoingProject_Birthday_Celebrations', OnGoingProject_Birthday_CelebrationsSchema);
module.exports = Item;

