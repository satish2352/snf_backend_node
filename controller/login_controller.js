const userModel = require('../model/login_model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secret = 'mysecretkey';

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate inputs
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const salt = bcrypt.genSaltSync(12);
    const encpassword = bcrypt.hashSync(password, salt);

    const userData = new userModel({
      username,
      email,
      password: encpassword,
    });

    // Save user data to the database
    const data = await userData.save();

    res.status(200).json({ message: 'User registered successfully', data });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: '1h' });

    res.json({ username: user.username, token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
