const express = require("express");

const FeedController = require("../controllers/feed");

const router = express.Router();

router.get('/posts', FeedController.getPosts);
router.post('/posts', FeedController.createPost);

module.exports = router;