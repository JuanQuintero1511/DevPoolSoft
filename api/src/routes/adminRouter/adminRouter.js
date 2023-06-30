const { Router } = require("express");


// const { getRolesHandler, postRoleHandler, putRolesHandler, postNewUserAdmHandler } = require("../../handlers/rolHandlers/rolHandlers");

const { getAdminHandler, createAdminHandler } = require('../../handlers/adminHandlers/adminHandlers')
// const validatePostRoles = require("../../middlewares/validatePostRoles/validatePostRoles");
// const validateJwt = require("../../middlewares/validateJwt/validateJwt");
// const validateRoleAdm = require("../../middlewares/validateRoleAdm/validateRolAdm")

const adminRoter = Router();

adminRoter.get("/",  getAdminHandler); 
adminRoter.post("/", createAdminHandler);
// adminRoter.put("/:id", putRolesHandler);




module.exports = adminRoter;