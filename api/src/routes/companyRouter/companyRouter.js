const { Router } = require("express");

const {
    getCompanyHandler,
    getCompanyHandlerId,
    createCompanyHandler,
    updateCompanyPremiumHandler,
    deleteCompanyHandler
 } = require("../../handlers/companyHandlers/companyHandlers")


const companyRouter = Router();

companyRouter.get("/", getCompanyHandler);
companyRouter.post("/", createCompanyHandler);
companyRouter.get("/:id", getCompanyHandlerId)
companyRouter.put("/:full_name", updateCompanyPremiumHandler);
companyRouter.delete("/:id", deleteCompanyHandler);


module.exports = companyRouter;