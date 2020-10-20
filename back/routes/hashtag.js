const express = require('express');
const router = express.Router();
const hashtagController = require('../Controller/hashtag');

router.get('/:hashtag',hashtagController.loadPosts);

module.exports = router;