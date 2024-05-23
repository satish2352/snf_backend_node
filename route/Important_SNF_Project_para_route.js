// route.js

const express = require('express');
const router = express.Router();
const { post_Important_SNF_Project_para, get_Important_SNF_Project_para, update_Important_SNF_Project_para, delete_Important_SNF_Project_para } = require('../controller/Important_SNF_Project_para_controller');
const upload = require('../multer');

// Define routes
router.get('/get', get_Important_SNF_Project_para);
router.post('/post',post_Important_SNF_Project_para);

router.put('/put/:id', update_Important_SNF_Project_para);
router.delete('/delete/:id', delete_Important_SNF_Project_para);
module.exports = router;
