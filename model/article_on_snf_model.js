const mongoose = require('mongoose');

const article_on_snfSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  // name: {
  //   type: String,
  //   required: true
  // },
  // imageUrl: {
  //   type: String,
  //   required: true
  // }
});


const Item = mongoose.model('Article_on_snf', article_on_snfSchema);
module.exports = Item;

