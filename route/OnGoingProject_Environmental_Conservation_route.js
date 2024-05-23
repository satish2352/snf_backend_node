// route.js

const express = require('express');
const router = express.Router();
const { postOnGoingProject_Environmental_Conservation, getOnGoingProject_Environmental_Conservation, updateOnGoingProject_Environmental_Conservation, deleteOnGoingProject_Environmental_Conservation } = require('../controller/OnGoingProject_Environmental_Conservation_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getOnGoingProject_Environmental_Conservation);
router.post('/post', upload.single('image'), postOnGoingProject_Environmental_Conservation);

router.put('/put/:id', upload.single('image'), updateOnGoingProject_Environmental_Conservation);
router.delete('/delete/:id', deleteOnGoingProject_Environmental_Conservation);
module.exports = router;
