// route.js

const express = require('express');
const router = express.Router();
const { postOnGoingProject_Health_MedicalProjects, getOnGoingProject_Health_MedicalProjects, updateOnGoingProject_Health_MedicalProjects, deleteOnGoingProject_Health_MedicalProjects } = require('../controller/OnGoingProject_Health_MedicalProjects_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getOnGoingProject_Health_MedicalProjects);
router.post('/post', upload.single('image'), postOnGoingProject_Health_MedicalProjects);

router.put('/put/:id', upload.single('image'), updateOnGoingProject_Health_MedicalProjects);
router.delete('/delete/:id', deleteOnGoingProject_Health_MedicalProjects);
module.exports = router;
