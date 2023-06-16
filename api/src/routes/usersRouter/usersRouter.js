const { Router } = require("express");
const {
 getUsers,
 postUsers,
 getUsersById,
 getUsersById}  = require("../../controllers/userController/getUsers");

// const {deleteUsers} = require("");

const usersRouter = Router();


usersRouter.get("/", getUsers);
usersRouter.post("/", postUsers);
usersRouter.get("/:id", getUsersById);
// usersRouter.put("/:id", updateUsers);
// usersRouter.delete("/:id", deleteUsers);


module.exports=usersRouter;