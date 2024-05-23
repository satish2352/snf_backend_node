const mongoose = require('mongoose');

const FounderParticipantsSchema = new mongoose.Schema({
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


const Item = mongoose.model('FounderParticipants', FounderParticipantsSchema);
module.exports = Item;

