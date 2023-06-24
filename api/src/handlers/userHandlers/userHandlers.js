const { createUser, getAllUsers, searchUsersByUserName } = require("../../controllers/usersControllers/usersControllers")

const getUserHandler = async (req, res) => {
    const {userName} = req.query;  
    try {     
        const results = userName ? await searchUsersByUserName(userName) : await getAllUsers()
        if (results.length === 0) throw Error ({message: "No se encontraron usuarios"})
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: "Error occurred while found users:", detail: error.message })
    }
}

const postUserHandler = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        await createUser(userName, email, password)
        const newUser = await searchUsersByUserName(userName)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUserById = async (req, res) => {

}

module.exports = {
    getUserHandler,
    postUserHandler,
    getUserById,
}