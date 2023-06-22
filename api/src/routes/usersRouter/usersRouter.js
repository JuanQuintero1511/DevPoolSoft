const { Router } = require("express");

const {
 getUserHandler,
 postUserHandler,
 getUserById}  = require("../../handlers/userHandlers/userHandlers");

// const {deleteUsers} = require("");

const usersRouter = Router();


usersRouter.get("/", getUserHandler);
usersRouter.post("/", postUserHandler);
usersRouter.get("/:id", getUserById);
// usersRouter.put("/:id", updateUsers);
// usersRouter.delete("/:id", deleteUsers);


module.exports=usersRouter;