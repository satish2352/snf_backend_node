const mongoose = require('mongoose');

      const userSchema = new mongoose.Schema({
        username: {
          type: String,
          // unique: true
        },

        email: {
          type: String,
        },
        password: {
          type: String,
        },
      });

const userModel = mongoose.model('login', userSchema);

module.exports = userModel;
