const mongoose = require('mongoose');

const homemediaSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,

});


const Item = mongoose.model('homemedia', homemediaSchema);
module.exports = Item;

