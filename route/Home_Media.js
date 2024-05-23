// route.js

const express = require('express');
const router = express.Router();
const { getHome_Media,postHome_Media,updateHome_Media,deleteHome_Media} = require('../controller/Home_media');
const upload = require('../multer');

// Define routes
router.get('/get', getHome_Media);
router.post('/post', upload.single('imageUrl'), postHome_Media);

router.put('/put/:id', upload.single('imageUrl'), updateHome_Media);
router.delete('/delete/:id', deleteHome_Media);
module.exports = router;
