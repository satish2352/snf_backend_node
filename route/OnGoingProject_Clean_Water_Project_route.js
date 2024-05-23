// route.js

const express = require('express');
const router = express.Router();
const { postOnGoingProject_Clean_Water_Project, getOnGoingProject_Clean_Water_Project, updateOnGoingProject_Clean_Water_Project, deleteOnGoingProject_Clean_Water_Project } = require('../controller/OnGoingProject_Clean_Water_Project_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getOnGoingProject_Clean_Water_Project);
router.post('/post', upload.single('image'), postOnGoingProject_Clean_Water_Project);

router.put('/put/:id', upload.single('image'), updateOnGoingProject_Clean_Water_Project);
router.delete('/delete/:id', deleteOnGoingProject_Clean_Water_Project);
module.exports = router;
