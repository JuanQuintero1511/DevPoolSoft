const { Router } = require("express");

const {
 getUserHandler,
 postUserHandler,
 postLoginUserHandler,
 getUserByIdHandler}  = require('../../handlers/userHandlers/userHandlers');

// const {deleteUsers} = require("");

const usersRouter = Router();


usersRouter.get("/", getUserHandler);
usersRouter.post("/register", postUserHandler);
usersRouter.post("/login", postLoginUserHandler);
usersRouter.get("/:id", getUserByIdHandler);
// usersRouter.put("/:id", updateUsers);
// usersRouter.delete("/:id", deleteUsers);


module.exports=usersRouter;