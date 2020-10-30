'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const multer  = require('multer');
const userController = require('../controllers/userController');

var upload = multer({ dest: './uploads/'});

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/', upload.single('user'), userController.user_create_post);

router.put('/', (req, res) => {
  res.send('With this endpoint you can edit users');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete users.');
});

module.exports = router;