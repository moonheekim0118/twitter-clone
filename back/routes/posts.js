const express = require('express');
const router = express.Router();
const postsController= require('../Controller/posts');

router.get('/',postsController.loadPost);

module.exports = router;