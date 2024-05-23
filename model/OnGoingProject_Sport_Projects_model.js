const mongoose = require('mongoose');

const OnGoingProject_Sport_ProjectsSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,

});


const Item = mongoose.model('OnGoingProject_Sport_Projects', OnGoingProject_Sport_ProjectsSchema);
module.exports = Item;

