const adminModel = require('../model/login_model')
const jwt = require('jsonwebtoken')

const secret = 'mysecretkey';


exports.register = async (req, res) => {
  
  const { username, email, password } = req.body;

  try {
    const existingUser = await adminModel.findOne({ email, username });

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const admin = await adminModel.create({ username, email, password });

    const token = jwt.sign({ username: admin.username, email: admin.email, id: admin._id }, secret, { expiresIn: '1h' });

    return res.status(201).json({ admin
      , token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await adminModel.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordCorrect = admin.password === password;

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: admin.email, id: admin.id }, secret, { expiresIn: '1h' });

    return res.json({ username: admin.username, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};