const {createNewPost, getAllPosts, getPostById, updatePost, deletePost} = require('../../controllers/postsControllers/postsControllers')

const createPostHandler = async (req, res) => {
    try {
      const {
        title, 
        body,
        state,
        id_user_data,
        image} = req.body;    
       

      if (!title && !body && !state && !id_user_data) throw new Error("Missing required data");

      const newPost = await createNewPost(
        title, 
        body, 
        state, 
        id_user_data,
        image);
              
      return res.status(200).json({ newPost });      
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
  
  const getAllPostsHandler = async (req, res) => {
    try {
      const allPosts = await getAllPosts();
      if (allPosts.length === 0) {
        throw new Error("The posts do not exist.");
      }
  
      return res.status(200).json(allPosts);
    } catch (error) {
      console.error("Error occurred while fetching all posts:", error);
      return res.status(400).json({ details: error.message });
    }
  };
  
  const getPostByIdHandler = async (req, res) => {
    const {id} = req.params;
    try{
      if(isNaN(id)) {
        let postById = await getPostById(id)

        if (!postById) throw Error("The user's post was not found.");
        return res.status(200).json(postById);
      }
    } catch(error) {
      return res.status(400).json({ details: error.message });
    }
};
  
  const updatePostHandler = async (req, res) => {
    const {
      id, 
      title, 
      body, 
      state, 
      id_user_data } = req.body;

      if (!id && !title && !body && !state && !id_user_data) throw new Error("Missing required data");
  
    try {
      if(isNaN(id)) {
        let postById = await getPostById(id)

        if (!postById) throw Error("The user's post was not found.");
      
      }
      const postChanges = await updatePost(id, title, body, state, id_user_data);
  
      return res.status(200).json({ message: "The post was updated successfully.", postChanges });
  
    } catch (error) {
      return res.status(500).json({ error: "An error occurred while updating the post.", details: error.message });
    }
  };
  
  const deletePostHandler = async (req, res) => {
    const { id } = req.params;
  
    try {
      const post = await getPostById(id);
      if (!post) {
        return res.status(404).json({ error: "The post does not exist." });
      }  
      const postdelete = await deletePost(post);
  
      return res.status(200).json({ message: "The post was deleted successfully.", postdelete });
  
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



