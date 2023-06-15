const { Router } = require("express");
const {getUsers}  = require("../../controllers/userController/getUsers");
const {postUsers} = require("../../controllers/userController/getUsers");
const {getUsersById} = require('../../controllers/userController/getUsers')
// // const {updateUsers} = require("");
// // const {deleteUsers} = require("");

const UsersRouter = Router();

//? #### **📍 GET | /users**
UsersRouter.get("/", getUsers);
UsersRouter.post("/", postUsers);
UsersRouter.get("/:id", getUsersById);
// // UsersRouter.put("/:id", updateUsers);
// // UsersRouter.delete("/:id", deleteUsers);


module.exports = UsersRouter;