const { User_data, Roles, Posts } = require("../../db");
const { Op } = require("sequelize");
const cloudinary = require("../../utils/cloudinary");

const createCompany = async (
  full_name,
  backup_email,
  description,
  date_birthday,
  address,
  phone_number,
  profile_image,
  authentication,
  image
) => {
  let imageUploadResult;

  if (typeof image === 'string') {
    // `image` es una ruta de archivo, usar cloudinary.uploader.upload
    imageUploadResult = await cloudinary.uploader.upload(image, {
      folder: 'posts',
    });
  } else if (typeof image === 'object' && image.public_id && image.url) {
    // `image` es un objeto de imagen con public_id y url, usar directamente
    imageUploadResult = image;
  } else {
    throw new Error('Invalid image data');
  }

  return await User_data.create({
    full_name,
    backup_email,
    description,
    date_birthday,
    address,
    phone_number,
    profile_image,
    authentication,
    image: {
      public_id: imageUploadResult.public_id,
      url: imageUploadResult.url,
    },
  });
};


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


