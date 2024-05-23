const mongoose = require('mongoose');

const State_ParticipantsSchema = new mongoose.Schema({
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


const Item = mongoose.model('State_Participants', State_ParticipantsSchema);
module.exports = Item;

