// route.js

const express = require('express');
const router = express.Router();
const { postOnGoingProject_Educational_Facilities, getOnGoingProject_Educational_Facilities, updateOnGoingProject_Educational_Facilities, deleteOnGoingProject_Educational_Facilities  } = require('../controller/OnGoingProject_Educational_Facilities_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getOnGoingProject_Educational_Facilities);
router.post('/post', upload.single('image'), postOnGoingProject_Educational_Facilities);

router.put('/put/:id', upload.single('image'), updateOnGoingProject_Educational_Facilities);
router.delete('/delete/:id', deleteOnGoingProject_Educational_Facilities);
module.exports = router;
