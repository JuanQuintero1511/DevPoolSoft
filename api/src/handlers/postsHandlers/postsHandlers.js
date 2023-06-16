const {createNewPost, getAllPosts, getPostById, updatePost, deletePost} = require("../../controllers/postsControllers/postsControllers")
const  {Posts} = require('../../db');


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
      if (allPosts === "[]")throw new Error("Post dont exist")      
      
      return res.status(201).json(allPosts);
      
    } catch (error) {
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
    const { id, description } = req.body;
  
    try {
      const postById = await getPostById( id);
      if (!postById) {
        return res.status(404).json({ error: 'El post no fue encontrado' });
      }
  
      const postChanges = await updatePost(id, description);
  
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
  
      await post.destroy(id);
  
      return res.status(200).json({ message: 'Post eliminado correctamente' });
  
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