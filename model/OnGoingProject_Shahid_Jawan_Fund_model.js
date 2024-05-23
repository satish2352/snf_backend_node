const mongoose = require('mongoose');

const OnGoingProject_Shahid_Jawan_FundSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,

});


const Item = mongoose.model('OnGoingProject_Shahid_Jawan_Fund', OnGoingProject_Shahid_Jawan_FundSchema);
module.exports = Item;

