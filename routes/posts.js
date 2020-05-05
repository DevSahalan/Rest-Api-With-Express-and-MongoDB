const express = require("express");
const router = express.Router();
const Post = require("../models/post");

//get all posts
router.get("/", (req, res) => {
  const posts = Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//create and save post
router.post("/", (req, res) => {
  Post.create(req.body)
    .then((post) => {
      res.send(post);
    })
    .catch((err) => res.status(404).send("enter both title and description"));
});

module.exports = router;
