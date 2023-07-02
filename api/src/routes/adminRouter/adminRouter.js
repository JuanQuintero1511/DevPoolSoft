const { Router } = require("express");


// const { getRolesHandler, postRoleHandler, putRolesHandler, postNewUserAdmHandler } = require("../../handlers/rolHandlers/rolHandlers");

const { getAdminHandler, createAdminHandler, updateAdminHandler, getAdminByIdHandler, setAdminHandler} = require('../../handlers/adminHandlers/adminHandlers')
// const validatePostRoles = require("../../middlewares/validatePostRoles/validatePostRoles");
// const validateJwt = require("../../middlewares/validateJwt/validateJwt");
// const validateRoleAdm = require("../../middlewares/validateRoleAdm/validateRolAdm")

const adminRoter = Router();

adminRoter.get("/",  getAdminHandler); 
adminRoter.get("/:id",  getAdminByIdHandler); 
adminRoter.post("/", createAdminHandler);
// adminRoter.put("/:id", updateAdminHandler);
adminRoter.put("/:id", setAdminHandler);




module.exports = adminRoter;