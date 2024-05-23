const mongoose = require('mongoose');

const snf_in_news_papersSchema = new mongoose.Schema({
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


const Item = mongoose.model('Snf_in_news_papers', snf_in_news_papersSchema);
module.exports = Item;

