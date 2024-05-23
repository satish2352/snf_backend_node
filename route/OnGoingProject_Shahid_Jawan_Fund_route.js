
const express = require('express');
const router = express.Router();
const { postOnGoingProject_Shahid_Jawan_Fund, getOnGoingProject_Shahid_Jawan_Fund, updateOnGoingProject_Shahid_Jawan_Fund, deleteOnGoingProject_Shahid_Jawan_Fund  } = require('../controller/OnGoingProject_Shahid_Jawan_Fund_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getOnGoingProject_Shahid_Jawan_Fund);
router.post('/post', upload.single('image'), postOnGoingProject_Shahid_Jawan_Fund);

router.put('/put/:id', upload.single('image'), updateOnGoingProject_Shahid_Jawan_Fund);
router.delete('/delete/:id', deleteOnGoingProject_Shahid_Jawan_Fund);
module.exports = router;
