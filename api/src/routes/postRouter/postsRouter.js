const { Router } = require("express");
const {getAllPostsHandler, createPostHandler, getPostByIdHandler, updatePostHandler, deletePostHandler}  = require("../../handlers/postsHandlers/postsHandlers");

const PostsRouter = Router();


PostsRouter.get("/", getAllPostsHandler);
PostsRouter.post("/", createPostHandler);
PostsRouter.get("/:id", getPostByIdHandler);
PostsRouter.put("/:id", updatePostHandler);
PostsRouter.delete("/:id", deletePostHandler);


module.exports = PostsRouter;