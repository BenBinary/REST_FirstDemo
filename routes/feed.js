const express = require("express");

const FeedController = require("../controllers/feed");

const router = express.Router();

router.get('/posts', FeedController.getPosts);

module.exports = router;