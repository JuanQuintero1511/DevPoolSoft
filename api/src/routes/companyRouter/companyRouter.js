const { Router } = require("express");

const {
    getCompanyHandler,
    getCompanyHandlerId,
    createCompanyHandler,
    updateCompanyHandler,
    deleteCompanyHandler
 } = require("../../handlers/companyHandlers/companyHandlers")


const companyRouter = Router();

companyRouter.get("/", getCompanyHandler);
companyRouter.get("/:id", getCompanyHandlerId)
companyRouter.post("/", createCompanyHandler);
companyRouter.put("/:id", updateCompanyHandler);
companyRouter.delete("/:id", deleteCompanyHandler);


module.exports = companyRouter;