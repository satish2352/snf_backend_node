const mongoose = require('mongoose');

const Important_SNF_Project_paraSchema = new mongoose.Schema({
  para: String
  // imageUrl: String
  // name: {
  //   type: String,
  //   required: true
  // },
  // imageUrl: {
  //   type: String,
  //   required: true
  // }
});


const Item = mongoose.model('Important_SNF_Project_Paragraph', Important_SNF_Project_paraSchema);
module.exports = Item;

