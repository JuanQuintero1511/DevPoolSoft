const { User_data, Roles } = require("../../db");
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
        // {
        // include: [
        //     {
        //         model: Activity,
        //         attributes: ["name", "difficulty", "duration", "season"],
        //         through: { attributes: [] },
        //     },
        // ],
    // }
    );
};


//? Obtiene la empresa por ID especifico mas los posteos
const getCompanyById = async (id) => {
    // return await Country.findOne({
    //     where: { id },
    //     include: [
    //         {
    //             model: Activity,
    //             attributes: ["name", "difficulty", "duration", "season"],
    //             through: { attributes: [] },
    //         },
    //     ],
    // });
};


//* Obtiene la empresa por nombre
const searchCompanyByName = async (full_name) => {
    return await User_data.findAll({
        where: { full_name: { [Op.iLike]: `%${full_name}%` } },
    });
};

module.exports = {
    createCompany,
    setCompanyRol,
    setCompanyPremium,
    getAllCompanies,
    getCompanyById,
    searchCompanyByName,
}











// const { user_data } = require('../../models/user_data')


// const postUsers = async (full_name) => {
//   const newUser = await user_data.create({
//           full_name,
         
//       })
    
//       res.json(newUser);
//   }

    
// const getUsers = async (req, res) => {
//   // try {
//   //   const users = await user_data.findAll();
//   //   res.json(users); 
//   // } catch (error) {
//   //   res.status(500).json({ error: 'Error al obtener los usuarios' });
//   // }
// }

// const getUsersById = (req, res) => {
//     res.send('getUsersById Funciona')
//   };

// const updateUsers = (req, res) => {
//     res.send('updateUsers Funciona')
//   };

// const deleteUsers = (req, res) => {
//     res.send('deleteUsers Funciona')
//   };

// module.exports = {postUsers, getUsers, getUsersById, updateUsers, deleteUsers}