const { createDevData, getAllDevData, searchByDevDataName } = require("../../controllers/devDataControllers/devDataControllers");

const getDevDataHandler = async (req, res) => {
}


const postDevDataHandler = async (req, res) => {
    try {

        const { id_user_data, aboutMe, experience, education, skills, ratings } = req.body;
    
        const newDevData = await createDevData(id_user_data, aboutMe, experience, education, skills, ratings);
    
        return res.status(200).json({ newDevData }); 
             
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
    };

const getDevDataById = async (req, res) => {

};

module.exports = {
    getDevDataHandler,
    postDevDataHandler,
    getDevDataById,
}