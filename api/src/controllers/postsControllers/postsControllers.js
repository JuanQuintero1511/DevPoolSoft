const { Posts,} = require ("../../db");

const createNewPost = async (description) => {
    const newPost = await Posts.create({ description});
    return newPost;
};

const getAllPosts = async () => {
    const AllPosts = await Posts.findAll();
    return AllPosts;
};

const getPostById = async (id) => {
    const PostById = await Posts.findOne(id);
    return PostById;
};



module.exports = {createNewPost, getAllPosts, getPostById}

