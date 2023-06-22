const { Users, User_data, Posts } = require("../../db");
const { Op } = require("sequelize")

const createUser = async (userName, email, password) => {
    await Users.create({
        userName, email, password
      })
}

const getAllUsers = async () => {
    return await Users.findAll({
        include: {
            model: User_data,
        }
    });
}

const searchUsersByUserName = async (userName) => {
    const users = await Users.findAll({
      where: {
        userName: { [Op.iLike ]: `%${userName}%`}
      },
      include: {
        model: User_data,
        include: {
          model: Posts
        }
      }
    })
    return users
  }

module.exports = {
    createUser,
    getAllUsers,
    searchUsersByUserName
}