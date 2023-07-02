const { Router } = require("express");
const {getAllPostsHandler, createPostHandler, getPostByIdHandler, updatePostHandler, deletePostHandler, likePostHandler, unLikePostHandler}  = require("../../handlers/postsHandlers/postsHandlers");

const postsRouter = Router();


postsRouter.get("/", getAllPostsHandler);
postsRouter.post("/", createPostHandler);
postsRouter.get("/:id", getPostByIdHandler);
postsRouter.put("/:id",  updatePostHandler);
postsRouter.delete("/:id", deletePostHandler);
postsRouter.patch("/like", likePostHandler);



module.exports = postsRouter;