const mongoose = require('mongoose');

const NRI_ParticipantsSchema = new mongoose.Schema({
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


const Item = mongoose.model('NRI_Participants', NRI_ParticipantsSchema);
module.exports = Item;

