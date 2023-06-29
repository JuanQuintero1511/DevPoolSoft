const { Users, User_data, Posts } = require("../../db");
const { encrypt, compare } = require('../../helpers/bcryptHandler/bcryptHelper');
const { generateTokenJwt } = require('../../helpers/jsonWebToken/generateTokenJwt');
const { Op } = require("sequelize")

const postNewUser = async (userName, email, password) => {

    try {
      //se encripta la password
    const passwordHash = await encrypt(password);
    const [user, created] = await Users.findOrCreate({
         where: { email},
         defaults: {
         userName,
         password: passwordHash,
         email,
         }
      })

      if (!created) throw new Error('The email is already registered');

      return {
        message: 'User created successfully',
        user: {
          id: user.id,
          userName: user.userName,
          email: user.email,
        },
      };

    } catch (error) {
      throw new Error(error.message);
    }
}

//En este me faltaría agregar la autenticación con token
const postLoginUser = async ({ email, password }) => {
  try {
    const user = await Users.findOne({ where: { email } });

    if (!user) throw new Error('User not registered with that email');

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) throw new Error('Invalid password');

    const token = await generateTokenJwt(user);

    return {
      message: 'User successfully logged in',
      user: {
        id_users: user.id_users,
        userName: user.userName,
        email: user.email,
      },
      token,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};


const getAllUsers = async () => {
    return await Users.findAll({
        attributes: ['id_users', 'userName', 'email', 'password'],
        include: {
            model: User_data,
        }
    });
}

const searchUsersByUserName = async (userName) => {
    const users = await Users.findOne({
      where: {
        userName: { [Op.iLike ]: `%${userName}%`}
      },
      attributes: ['id_users', 'userName', 'email', 'password'],
      include: {
        model: User_data,
        include: {
          model: Posts
        }
      }
    })
    return users;
  }

  const searchUserById = async (id) => {
    const UserById = await Users.findByPk(id,
      {  
        attributes: ['id_users', 'userName', 'email'],
        include: {
          model: User_data,
          include: {
            model: Posts
          }
        }
      })

      return UserById;
  };

module.exports = {
    postNewUser,
    postLoginUser,
    getAllUsers,
    searchUsersByUserName,
    searchUserById
}