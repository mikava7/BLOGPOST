const express = require("express");
const { getAllPosts, createPost } = require("../controllers/postHandler");
const router = express.Router();

//goes here http://localhost:5000/posts
router.get("/", getAllPosts);
router.post("/", createPost);

module.exports = router;
