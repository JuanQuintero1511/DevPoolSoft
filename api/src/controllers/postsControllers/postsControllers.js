const { Posts, User_data } = require ("../../db");


const createNewPost = async (title, body, state, id_user_data) => {
  const newPost = await Posts.create({ 
    title, 
    body, 
    state, 
    id_user_data
  });
  return newPost;
};

const getAllPosts = async () => {
    const AllPosts = await Posts.findAll({ 
        include: { 
          model: User_data, 
          attributes: ['full_name'] 
        }});
    return AllPosts;
};

const getPostById = async (id) => {
    const PostById = await Posts.findOne({ 
      where: { id_post: id },
      include: { 
        model: User_data,
        attributes: ['full_name']
      }});  
    return PostById;
  };
  

const updatePost = async ( id, title, body, state, id_user_data) => {
  const postUpdate = await Posts.update(
        { title: title, body: body, state: state },
        { where: { id_post:  id, id_user_data:id_user_data  } }
      );
    return postUpdate;
  };

const deletePost = async (post) => {
    const postDelete = await post.destroy();
    return postDelete;
};





module.exports = {createNewPost, getAllPosts, getPostById, updatePost, deletePost}

