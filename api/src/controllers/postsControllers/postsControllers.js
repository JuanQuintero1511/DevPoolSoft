const { Posts } = require ("../../db");

const createNewPost = async (description) => {
    const newPost = await Posts.create({ description});
    return newPost;
};

const getAllPosts = async () => {
    const AllPosts = await Posts.findAll();
    return AllPosts;
};

const getPostById = async (id) => {
    const PostById = await Posts.findByPk(id);
    return PostById;
};
const deletePost = async (id) => {
    const postDelete = await Posts.destroy(id);
    return postDelete;
};
const updatePost = async (description) => {
   const postChanges = await Posts.update(description);
   return postChanges;
};





module.exports = {createNewPost, getAllPosts, getPostById, updatePost, deletePost}

