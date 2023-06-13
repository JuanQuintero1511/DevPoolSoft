const { Router } = require("express");
const {getUsers}  = require("../../controllers/user/getUsers");
const {postUsers} = require("../../controllers/user/getUsers");
// const {getUsersById} = require('../../controllers/user/getUsers')
// const {updateUsers} = require("");
// const {deleteUsers} = require("");

const UsersRouter = Router();

UsersRouter.get("/", getUsers);
UsersRouter.post("/", postUsers);
// UsersRouter.get("/:id", getUsersById);
// UsersRouter.put("/:id", updateUsers);
// UsersRouter.delete("/:id", deleteUsers);


module.exports = UsersRouter;