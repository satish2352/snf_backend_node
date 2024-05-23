// route.js

const express = require('express');
const router = express.Router();
const { postState_Participants, getState_Participants, updateState_Participants, deleteState_Participants } = require('../controller/Team_SNF_State_Participants_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getState_Participants);
router.post('/post', upload.single('imageUrl'), postState_Participants);

router.put('/put/:id', upload.single('imageUrl'), updateState_Participants);
router.delete('/delete/:id', deleteState_Participants);
module.exports = router;
