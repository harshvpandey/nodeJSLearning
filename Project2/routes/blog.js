const express=require('express');
const router = express.Router();

//Import Controller
const {createComment}=require("../controller/commentController");
const {createPost,getAllPosts}=require("../controller/postController")
const { Routes } = require('react-router');


//create mapping 
router.post("/comments/create",createComment);

router.post("/post/create",createPost);

router.get("/posts/getAllPosts",getAllPosts);
//export
module.exports = router;
