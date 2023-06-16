const { Router } = require("express");
const {getAllPostsHandler, createPostHandler, getPostByIdHandler, }  = require("../../handlers/postsHandlers/postsHandlers");

const PostsRouter = Router();


PostsRouter.get("/", getAllPostsHandler);
PostsRouter.post("/", createPostHandler);
PostsRouter.get("/:id", getPostByIdHandler);
// PostsRouter.put("/:id", updatePostsHandler);
// PostsRouter.delete("/:id", deletePostHandler);


module.exports = PostsRouter;