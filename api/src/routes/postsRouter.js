const { Router } = require("express");
const {getAllPosts, createPost, getPostById, deletePost}  = require("../controllers/postControllers");

const PostsRouter = Router();


PostsRouter.get("/", getAllPosts);
PostsRouter.post("/", createPost);
PostsRouter.get("/:id",getPostById);
// // PostsRouter.put("/:id", updatePosts);
PostsRouter.delete("/:id", deletePost);


module.exports = PostsRouter;