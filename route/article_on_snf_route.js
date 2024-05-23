// route.js

const express = require('express');
const router = express.Router();
const { postarticle_on_snf, getarticle_on_snf, updatearticle_on_snf, deletearticle_on_snf } = require('../controller/article_on_snf_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getarticle_on_snf);
router.post('/post', upload.single('image'), postarticle_on_snf);

router.put('/put/:id', upload.single('image'), updatearticle_on_snf);
router.delete('/delete/:id', deletearticle_on_snf);
module.exports = router;
