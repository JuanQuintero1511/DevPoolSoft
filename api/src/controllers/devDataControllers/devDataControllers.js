const { Devdata } = require('../../db');

const createDevData = async ( id_user_data, aboutMe, experience, education, skills, ratings) => {
    const NewDevData = await Devdata.create({ 
        id_user_data,aboutMe, experience, education, skills, ratings
    });
    return NewDevData;
  }


const getAllDevData = async () => {
    const AllDevData = await Devdata.findAll()        
    return AllDevData;
};

const getDevDataById = async (id) => {
    const DevDataById = await Devdata.findByPk(id)
    return DevDataById;
};


const updateDevData = async ( id_devData, id_user_data, aboutMe, experience, education, skills, ratings) => {
    const DevDataUpdate = await Devdata.update(
          { aboutMe: aboutMe, experience: experience, education: education, skills:skills, ratings: ratings},
          { where: { id_devData:id_devData, id_user_data:id_user_data  } }
        );
      return DevDataUpdate;
    };

const searchByDevDataName = async (req, res) => {

};





module.exports = {
    createDevData, 
    getAllDevData, 
    updateDevData,
    getDevDataById,
    searchByDevDataName
}