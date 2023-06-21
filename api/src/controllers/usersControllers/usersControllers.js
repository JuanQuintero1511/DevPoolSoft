const { Users, User_data } = require("../../db");
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

module.exports = {
    createUser,
    getAllUsers
}