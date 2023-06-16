const { Router } = require("express");
const {getAllPostsHandler, createPostHandler, getPostByIdHandler, deletePostHandler}  = require("../../handlers/postsHandlers/postsHandlers");

const postsRouter = Router();


postsRouter.get("/", getAllPostsHandler);
postsRouter.post("/", createPostHandler);
postsRouter.get("/:id", getPostByIdHandler);
// postsRouter.put("/:id", updatePostsHandler);
postsRouter.delete("/:id", deletePostHandler);


module.exports = postsRouter;