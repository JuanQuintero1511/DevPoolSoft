const { User_data } = require("../db")

// const { Op } = require("sequelize");

const createCompany = async (full_name, backup_email, description, date_birthday, address, phone_number, profile_image, authentication) => {
    return (
        await User_data.create({ full_name, backup_email, description, date_birthday, address, phone_number, profile_image, authentication })
    )    
}

const setPremium = async (isPremium, full_name) => {
    if (isPremium === true) {
        const query = `UPDATE user_data SET isPremium = true WHERE full_name = ${full_name};`;
        await User_data.query(query);
    }    
} 






// //?Trae las empresas de la DB
const getAllCompanies = async () => {
    // return await User_data.findAll({
    //     include: [
    //         {
    //             model: Activity,
    //             attributes: ["name", "difficulty", "duration", "season"],
    //             through: { attributes: [] },
    //         },
    //     ],
    // });
};


//? Obtiene el pais por ID especifico mas las actividades
const getCountriesById = async (id) => {
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


//?Obtiene el pais por nombre
const getCountriesByName = async (name) => {
    // return await Country.findAll({
    //     //? ILIKE '%hat' (case insensitive)
    //     where: { name: { [Op.iLike]: `%${name}%` } },
    // });
};

module.exports = {
    createCompany,
    setPremium,
    getAllCompanies,
    getCountriesById,
    getCountriesByName,
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