// route.js

const express = require('express');
const router = express.Router();
const { postawards_recognation, getawards_recognation, updateawards_recognation, deleteawards_recognation } = require('../controller/awards_recognation_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getawards_recognation);
router.post('/post', upload.single('image'), postawards_recognation);

router.put('/put/:id', upload.single('image'), updateawards_recognation);
router.delete('/delete/:id', deleteawards_recognation);
module.exports = router;
