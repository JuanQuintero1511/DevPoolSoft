const { Devdata } = require('../../db');

const createDevData = async ( id_user_data, aboutMe, experience, education, skills, ratings) => {
    const NewDevData = await Devdata.create({ 
        id_user_data,aboutMe, experience, education, skills, ratings
    });
    return NewDevData;
  }


const getAllDevData = async () => {
   
};

const searchByDevDataName = async (req, res) => {

};





module.exports = {
    createDevData, 
    getAllDevData, 
    searchByDevDataName
}