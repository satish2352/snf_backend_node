const mongoose = require('mongoose');

const SUPPORTERSSchema = new mongoose.Schema({
  namesup: String,
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


const Item = mongoose.model('SUPPORTERS', SUPPORTERSSchema);
module.exports = Item;

