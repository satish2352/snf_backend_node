const mongoose = require('mongoose');

const Home_4_Cards_Schema = new mongoose.Schema({
  name4: String,
  imageUrl: String,
  para4: String,
  // name: {
  //   type: String,
  //   required: true
  // },
  // imageUrl: {
  //   type: String,
  //   required: true
  // }
});


const Item = mongoose.model('Home_4_Cards', Home_4_Cards_Schema);
module.exports = Item;

