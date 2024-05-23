const mongoose = require('mongoose');

const OnGoingProject_Clean_Water_ProjectSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,

});


const Item = mongoose.model('OnGoingProject_Clean_Water_Project', OnGoingProject_Clean_Water_ProjectSchema);
module.exports = Item;

