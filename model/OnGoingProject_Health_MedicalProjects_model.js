const mongoose = require('mongoose');

const OnGoingProject_Health_MedicalProjectsSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,

});


const Item = mongoose.model('OnGoingProject_Health_MedicalProjects', OnGoingProject_Health_MedicalProjectsSchema);
module.exports = Item;

