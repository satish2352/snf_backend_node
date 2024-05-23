// route.js

const express = require('express');
const router = express.Router();
const { postOnGoingProject_Sport_Projects, getOnGoingProject_Sport_Projects, updateOnGoingProject_Sport_Projects, deleteOnGoingProject_Sport_Projects } = require('../controller/OnGoingProject_Sport_Projects_controller');
const upload = require('../multer');

// Define routes
router.get('/get', getOnGoingProject_Sport_Projects);
router.post('/post', upload.single('image'), postOnGoingProject_Sport_Projects);

router.put('/put/:id', upload.single('image'), updateOnGoingProject_Sport_Projects);
router.delete('/delete/:id', deleteOnGoingProject_Sport_Projects);
module.exports = router;
