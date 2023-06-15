const { Router } = require("express");

const {
    getCompanyHandler,
    getCompanyHandlerId,
    createCompanyHandler,
    updateCompanyHandler,
    deleteCompanyHandler
 } = require("../handlers/companyHandlers")


const CompanyRouter = Router();

CompanyRouter.get("/", getCompanyHandler);
CompanyRouter.get("/:id", getCompanyHandlerId)
CompanyRouter.post("/", createCompanyHandler);
CompanyRouter.put("/:id", updateCompanyHandler);
CompanyRouter.delete("/:id", deleteCompanyHandler);


module.exports = CompanyRouter;