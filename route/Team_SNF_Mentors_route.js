// route.js

const express = require('express');
const router = express.Router();
const { postMentors, getMentors, updateMentors, deleteMentors } = require('../controller/Team_SNF_Mentors_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getMentors);
router.post('/post', upload.single('imageUrl'), postMentors);

router.put('/put/:id', upload.single('imageUrl'), updateMentors);
router.delete('/delete/:id', deleteMentors);
module.exports = router;
