const { Router } = require("express");
const {getAllPostsHandler, createPostHandler, getPostByIdHandler, updatePostHandler, deletePostHandler, likePostHandler, unLikePostHandler}  = require("../../handlers/postsHandlers/postsHandlers");
const {updateLike, unlikePost} = require('../../controllers/postsControllers/postsControllers')

const postsRouter = Router();


postsRouter.get("/", getAllPostsHandler);
postsRouter.post("/", createPostHandler);
postsRouter.get("/:id", getPostByIdHandler);
postsRouter.put("/:id",  updatePostHandler);
postsRouter.delete("/:id", deletePostHandler);
postsRouter.patch("/like", updateLike);
postsRouter.patch("/unlike", unlikePost);



module.exports = postsRouter;