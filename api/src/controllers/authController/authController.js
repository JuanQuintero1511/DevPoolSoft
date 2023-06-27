const { Users } = require("../../db");

const authGoogleUserCreate = async (userName, email) => {
    const password = "userGoogle"
    await Users.create({
      userName, email, password
    })
  }

module.exports = {
    authGoogleUserCreate
}