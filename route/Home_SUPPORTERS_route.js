// route.js
const express = require('express');
const router = express.Router();
const { postSupporters, getSupporters, updateSupporters, deleteSupporters } = require('../controller/Home_SUPPORTERS_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getSupporters);
router.post('/post', upload.single('image'), postSupporters);

router.put('/put/:id', upload.single('image'), updateSupporters);
router.delete('/delete/:id', deleteSupporters);
module.exports = router;
