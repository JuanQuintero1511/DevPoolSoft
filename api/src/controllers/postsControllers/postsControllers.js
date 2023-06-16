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

const updatePost = async ( id, description) => {
    try {
      const postUpdateResult = await Posts.update(
        { description: description },
        { where: { id_post:  id } }
      );
      return postUpdateResult;
    } catch (error) {
      throw new Error('Error al actualizar los posts: ' + error.message);
    }
  };

const deletePost = async (post) => {
    const postDelete = await post.destroy();
    return postDelete;
};





module.exports = {createNewPost, getAllPosts, getPostById, updatePost, deletePost}

