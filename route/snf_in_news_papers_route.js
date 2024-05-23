// route.js

const express = require('express');
const router = express.Router();
const { postsnf_in_news_papers, getsnf_in_news_papers, updatesnf_in_news_papers, deletesnf_in_news_papers  } = require('../controller/snf_in_news_papers_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getsnf_in_news_papers);
router.post('/post', upload.single('image'), postsnf_in_news_papers);

router.put('/put/:id', upload.single('image'), updatesnf_in_news_papers);
router.delete('/delete/:id', deletesnf_in_news_papers);
module.exports = router;
