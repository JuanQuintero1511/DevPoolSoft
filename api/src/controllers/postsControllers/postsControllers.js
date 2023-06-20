const { Posts, User_data } = require ("../../db");
const cloudinary= require ("../../utils/cloudinary")

const createNewPost = async (title, body, state, id_user_data, image) => {
  let imageUploadResult;

  if (typeof image === 'string') {
    // `image` es una ruta de archivo, usar cloudinary.uploader.upload
    imageUploadResult = await cloudinary.uploader.upload(image, {
      folder: 'posts',
    });
  } else if (typeof image === 'object' && image.public_id && image.url) {
    // `image` es un objeto de imagen con public_id y url, usar directamente
    imageUploadResult = image;
  } else {
    throw new Error('Invalid image data');
  }

  const newPost = await Posts.create({
    title,
    body,
    state,
    id_user_data,
    image: {
      public_id: imageUploadResult.public_id,
      url: imageUploadResult.url,
    },
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
  const PostById = await Posts.findByPk(id)
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





module.exports = {createNewPost, getAllPosts, getPostById, updatePost, deletePost}
