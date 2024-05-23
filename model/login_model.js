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

const userModel = mongoose.model('login_model', userSchema);

module.exports = userModel;
