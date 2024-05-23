// route.js

const express = require('express');
const router = express.Router();
const { postCarousel, getCarousel, updateCarousel, deleteCarousel } = require('../controller/Home_carousel_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getCarousel);
router.post('/post', upload.single('image'), postCarousel);

router.put('/put/:id', upload.single('image'), updateCarousel);
router.delete('/delete/:id', deleteCarousel);
module.exports = router;
