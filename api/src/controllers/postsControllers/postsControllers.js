const { Posts } = require ("../../db");

const createNewPost = async (description) => {
    const newPost = await Posts.create({ description});
    return newPost;
};

const getAllPosts = async () => {
    const AllPosts = await Posts.findAll();
    return AllPosts;
};

const getPostById = async (id_post) => {
    const PostById= await Posts.findByPk(id_post);
    return PostById;
};



module.exports = {createNewPost, getAllPosts, getPostById}