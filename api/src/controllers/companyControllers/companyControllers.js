const { User_data, Roles, Posts } = require("../../db");
const { Op } = require("sequelize");

//Fn para crear la empresa
const createCompany = async (
    full_name,
    backup_email,
    description,
    date_birthday,
    address,
    phone_number,
    profile_image,
    authentication) => { 
            return (await User_data.create({ 
            full_name,
            backup_email,
            description,
            date_birthday,
            address,
            phone_number,
            profile_image,
            authentication }))}

const setCompanyRol = async (rol_type, full_name) => {
    const [companyRol, created] = await Roles.findOrCreate({
        where: { 
            rol_type: `${rol_type}`}
    })
    const atributoToSet = companyRol.dataValues.id_roles
    await User_data.update({id_roles: `${atributoToSet}`},{
        where: {
            full_name: { [Op.iLike]: `%${full_name}%` }
        }
    })
} 

const setCompanyPremium = async (full_name) => {
    await User_data.update({isPremium: true},{
        where: {
            full_name: { [Op.iLike]: `%${full_name}%` }
        }
    })
} 


// //?Trae las empresas de la DB
const getAllCompanies = async () => {
    return await User_data.findAll(

    );
};


//? Obtiene la empresa por ID especifico mas los posteos
const getCompanyById = async (id) => {
      const companyById = await User_data.findByPk(id, {
        include: {
          model: Posts,
          // include: Comment // Incluye los comentarios relacionados con cada post
        }
      });     
      return companyById;
    }
  

//* Obtiene la empresa por nombre
const searchCompanyByName = async (full_name) => {
        const companies = await User_data.findAll({
        where: {
          full_name: { [Op.iLike]: `%${full_name}%` }
        },
        include: {
          model: Posts
          // include: Comment 
        }
      });
      return companies;
}

module.exports = {
    createCompany,
    setCompanyRol,
    setCompanyPremium,
    getAllCompanies,
    getCompanyById,
    searchCompanyByName,
}


