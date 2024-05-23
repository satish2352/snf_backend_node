// route.js

const express = require('express');
const router = express.Router();
const { postNRI_Participants, getNRI_Participants, updateNRI_Participants, deleteNRI_Participants } = require('../controller/Team_SNF_NRI_Participants_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getNRI_Participants);
router.post('/post', upload.single('imageUrl'), postNRI_Participants);

router.put('/put/:id', upload.single('imageUrl'), updateNRI_Participants);
router.delete('/delete/:id', deleteNRI_Participants);
module.exports = router;
