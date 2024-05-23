// route.js

const express = require('express');
const router = express.Router();
const { post_Home_2_Cards, get_Home_2_Cards, update_Home_2_Cards, delete_Home_2_Cards } = require('../controller/Home_2_Cards_controller');
const upload = require('../multer');

// Define routes
router.get('/get', get_Home_2_Cards);
router.post('/post', upload.single('image'), post_Home_2_Cards);

router.put('/put/:id', upload.single('image'), update_Home_2_Cards);
router.delete('/delete/:id', delete_Home_2_Cards);
module.exports = router;
