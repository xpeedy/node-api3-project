const express = require('express');
const Posts = require("./posts-model")
const router = express.Router();

router.get('/', (req, res) => {
  // RETURN AN ARRAY WITH ALL THE POSTS
  Posts.get().then(posts => {
    res.status(200).json(posts)
  })
});

router.get('/:id', (req, res) => {
  // RETURN THE POST OBJECT
  // this needs a middleware to verify post id
  res.status(200).json()
});

// do not forget to export the router
module.exports = router;