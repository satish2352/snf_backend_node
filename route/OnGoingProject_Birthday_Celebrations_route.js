// route.js

const express = require('express');
const router = express.Router();
const { postOnGoingProject_Birthday_Celebrations, getOnGoingProject_Birthday_Celebrations, updateOnGoingProject_Birthday_Celebrations, deleteOnGoingProject_Birthday_Celebrations } = require('../controller/OnGoingProject_Birthday_Celebrations_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getOnGoingProject_Birthday_Celebrations);
router.post('/post', upload.single('image'), postOnGoingProject_Birthday_Celebrations);

router.put('/put/:id', upload.single('image'), updateOnGoingProject_Birthday_Celebrations);
router.delete('/delete/:id', deleteOnGoingProject_Birthday_Celebrations);
module.exports = router;
