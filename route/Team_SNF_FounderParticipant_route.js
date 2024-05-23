// route.js

const express = require('express');
const router = express.Router();
const { postFounderParticipants, getFounderParticipants, updateFounderParticipants, deleteFounderParticipants  } = require('../controller/Team_SNF_FounderParticipant_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getFounderParticipants);
router.post('/post', upload.single('imageUrl'), postFounderParticipants);

router.put('/put/:id', upload.single('imageUrl'), updateFounderParticipants);
router.delete('/delete/:id', deleteFounderParticipants);
module.exports = router;
