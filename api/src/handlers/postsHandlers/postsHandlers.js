
const {createNewPost, getAllPosts, getPostById, updatePost} = require("../../controllers/postsControllers/postsControllers")

const createPostHandler = async (req, res) => {
    try {
      const {description} = req.body;      
      if (!description ) throw new Error("Missing required data");
      const newPost = await createNewPost (description);           
      return res.status(201).json(newPost);

    } catch (error) {
      return res.status(400).json({ error: error.message });      
    }
  };
  
  const getAllPostsHandler = async (req, res) => {
    try {      
      const allPosts = await getAllPosts();      
      return res.status(201).json(allPosts);
      
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
  

 const getPostByIdHandler = async (req, res) => {
    
    const { id } = req.params;
        
    try {      
      const PostById = await getPostById (id); 
      if (!PostById) return res.status(404).json({ error: 'El post no existe' });            
      return res.status(200).json(PostById);

    } catch (error) {
      return res.status(400).json({ error: error});
    }
  };
  
  const updatePostHandler = async (req, res) => {
    const { id, description} = req.body;
    
    try {
      const postChanges = await getPostById (id);          
      if (!postChanges) {
        return res.status(404).json({ error: error });
      }
      console.log(postChanges + "tututu");

      postChanges = await updatePost(description);

      console.log(postChanges + "ttataata");
  
      return res.status(200).json({ message: 'Post actualizado correctamente', postChanges });
  
    } catch (error) {
      return res.status(500).json({ error: 'Ocurrió un error al actualizar el post' });
    }
  };
  
  
  const deletePostHandler = async (id_post) => {
    try {
     
      const post = await Posts.findByPk(id_post);
      
      if (!post) {
        throw new Error('El post no existe');
      }

      await post.destroy();
      
      return 'Post eliminado exitosamente';
     } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

module.exports = {
    createPostHandler,
    getAllPostsHandler,
    getPostByIdHandler,
    updatePostHandler,
    deletePostHandler
};



// // const { Activity, Country } = require("../db");
// const { Op } = require("sequelize");

// const postActivity = async ({ name, difficulty, duration, season, country, }) => {
//   const newActivity = await Activity.create({
//     name,
//     difficulty,
//     duration,
//     season,
//     country,
//   });
//   for (const countryId of country) {
//     let countryObj = await Country.findByPk(countryId);
//     if (countryObj) {
//       newActivity.addCountry(countryObj);
//     }
//   }
//   return newActivity;
// };

// const getActivities = async () => {
//   const activity = await Activity.findAll({
//     include: [{ model: Country, attributes: ["name"] }],
//   });
//   return activity;
// };

// const getActivityByName = async (name) => {
//   return await Activity.findOne({
//     where: { name: { [Op.iLike]: `%${name}%` } },
//   });
// };


// //?Controller para borrar actividades
// const activityDeleteAll = () => {
//   Activity.destroy({ where: {} });
// };

// const activityDeleteById = (id) => {
//   Activity.destroy({ where: { id } });
// };

// module.exports = {
//   getActivities,
//   postActivity,
//   getActivityByName,
//   activityDeleteAll,
//   activityDeleteById,
// };