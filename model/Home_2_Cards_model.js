const mongoose = require('mongoose');

const Home_2_Cards_Schema = new mongoose.Schema({
  name2: String,
  imageUrl: String,
  para2: String,
  // name: {
  //   type: String,
  //   required: true
  // },
  // imageUrl: {
  //   type: String,
  //   required: true
  // }
});


const Item = mongoose.model('Home_2_Cards', Home_2_Cards_Schema);
module.exports = Item;

