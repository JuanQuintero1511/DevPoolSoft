const {createNewPost, getAllPosts, getPostById, updatePost, deletePost} = require('../../controllers/postsControllers/postsControllers')

const createPostHandler = async (req, res) => {
    try {
      const {
        title, 
        body,
        state} = req.body;    
      const id_user_data = req.body.id_user_data  

      if (!title && !body && !state ) throw new Error("Missing required data");

      const newPost = await createNewPost(
        title, 
        body, 
        state, 
        id_user_data);
              
      return res.status(400).json({ newPost });      
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
  
  const getAllPostsHandler = async (req, res) => {
    try {
      const allPosts = await getAllPosts();
      if (allPosts.length === 0) {
        throw new Error("Posts don't exist");
      }
  
      return res.status(200).json(allPosts);
    } catch (error) {
      console.error("Error occurred while fetching all posts:", error);
      return res.status(400).json({ error: error.message });
    }
  };
  
  const getPostByIdHandler = async (req, res) => {
    const {id} = req.params;
    try{
      if(isNaN(id)) {
        let postById = await getPostById(id)

        if (!postById) throw Error('No se encontro el Post del usuario');
        return res.status(200).json(postById);
      }
    } catch(error) {
      return res.status(400).json(error.message);
    }
};
  
  const updatePostHandler = async (req, res) => {
    const { id, title, body, state } = req.body;
  
    try {
      if(isNaN(id)) {
        let postById = await getPostById(id)

        if (!postById) throw Error('No se encontro el Post del usuario');
      
      }
      const postChanges = await updatePost(id, title, body, state);
  
      return res.status(200).json({ message: 'Post actualizado correctamente', postChanges });
  
    } catch (error) {
      return res.status(500).json({ error: 'Ocurrió un error al actualizar el post', details: error.message });
    }
  };
  
  const deletePostHandler = async (req, res) => {
    const { id } = req.params;
  
    try {
      const post = await getPostById(id);
      if (!post) {
        return res.status(404).json({ error: 'El post no existe' });
      }  
      const postdelete = await deletePost(post);
  
      return res.status(200).json({ message: 'Post eliminado correctamente', postdelete });
  
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };


module.exports = {
    createPostHandler,
    getAllPostsHandler,
    getPostByIdHandler,
    updatePostHandler,
    deletePostHandler
};



