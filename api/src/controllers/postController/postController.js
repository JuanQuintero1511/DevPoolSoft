const { post } = require('../../models/post.js');

const createPost = async (req) => {
    try {
      const postData = req.body;
      const newPost = await post.create(postData);
      return newPost;
    } catch (error) {
      throw new Error('Error al crear el post');
    }
  };
  
  const getAllPosts = async () => {
    try {
      const allPosts = await post.findAll();
      return allPosts;
    } catch (error) {
      throw new Error('Error al obtener los posts');
    }
  };
  
  const getPostById = async (id_post) => {
    try {
      const post = await post.findByPk(id_post);
      if (!post) {
        throw new Error('El post no existe');
      }
      return post;
    } catch (error) {
      throw new Error('Error al obtener el post');
    }
  };
  
  const updatePost = async (id_post, newData) => {
    try {
      const post = await post.findByPk(id_post);
      if (!post) {
        throw new Error('El post no existe');
      }
      await post.update(newData);
      return post;
    } catch (error) {
      throw new Error('Error al actualizar el post');
    }
  };
  
  const deletePost = async (id_post) => {
    try {
      const post = await post.findByPk(id_post);
      if (!post) {
        throw new Error('El post no existe');
      }
      await post.destroy();
      return 'Post eliminado exitosamente';
    } catch (error) {
      throw new Error('Error al eliminar el post');
    }
  };

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
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