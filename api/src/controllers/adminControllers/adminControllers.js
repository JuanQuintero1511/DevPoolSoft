const { User_data, Users } = require('../../db');
// const { encrypt } = require("../../helpers/password/bcryptHelper");
// const generateTokenJwt = require("../../helpers/tokenjwt/generateTokenJwt");


const getAdmin = async () => {
    const allAdmin = await User_data.findAll({
      where: {
        rol: 'admin'
      },
      include: [
        {
          model: Users,
          attributes: ['userName', 'email', 'password']
        }
      ]
    });
    return allAdmin;
  };

const updateAdmin = async (id, full_name, backup_email, date_birthday, address, phone_number, profile_image, authentication, image, rol) => {       
    const [numUpdated, updatedAdmin] = await User_data.update(
      {
        full_name: full_name,
        backup_email: backup_email,
        date_birthday: date_birthday,
        address: address,
        phone_number: phone_number,
        profile_image: profile_image,
        authentication: authentication,
        image: image,
        rol:rol
      },
      {
        where: {
          id: id,
          rol: 'admin'
        },
        returning: true // Para obtener el administrador actualizado en la respuesta
      }
    );
  
    if (numUpdated === 0) {
      throw new Error('Administrador no encontrado');
    }
  
    return updatedAdmin[0]; // Devuelve el administrador actualizado
  };

  
  const setToAdmin = async (id, rol) => {       
    
    const setAdmin = await User_data.update(
      {
        rol: rol
      },
      {
        where: {
          id_user_data: id
        }
      }
    );
     
      return setAdmin;
    }


module.exports = {
    getAdmin,
    updateAdmin,
    setToAdmin
}