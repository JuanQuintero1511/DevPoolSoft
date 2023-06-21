const { Router } = require("express");
const loginHandlers  = require("../../handlers/loginHandlers/loginHandlers");

const loginRouter = Router();

loginRouter.get("/", loginHandlers);

module.exports = loginRouter;