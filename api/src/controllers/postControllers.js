const { Posts } = require("../db");

const createPost = async (req, res) => {
    try {

      const {description} = req.body;

      
      if (!description) throw new Error("Missing required data");
      
      const newPost = {description}

      const createNewPost = await  Posts.create(newPost);
      
      return res.status(201).json(createNewPost)

    } catch (error) {
      return res.status(400).json({ error: error.message });
      
    }
  };
  
  const getAllPosts = async (req, res) => {
    try {
      
      const allPosts = await Posts.findAll();
      
      return res.status(201).json(allPosts)
      
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
  
  const getPostById = async (req, res) => {
    const {id_post} = req.params;
    
    try {      
      const post = await Posts.findByPk(id_post);
      
      if (!post) {
        throw new Error('El post no existe');
      }
      return post;

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
  
  const updatePost = async (id_post, newData) => {
    try {
      
      const post = await Posts.findByPk(id_post);
      if (!post) {
        throw new Error('El post no existe');
      }

      
      await post.update(newData);

      return post;

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
  
  const deletePost = async (id_post) => {
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