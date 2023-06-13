const { Router } = require("express");
const {getBusiness}  = require('');
const {postBusiness} = require("");
const {getBusinessById} = require("");
const {updateBusiness} = require("");
const {deleteBusiness} = require("");

const BusinessRouter = Router();

BusinessRouter.get("/", getBusiness);
BusinessRouter.post("/", postBusiness);
BusinessRouter.get("/:id", getBusinessById)
BusinessRouter.put("/:id", updateBusiness);
BusinessRouter.delete("/:id", deleteBusiness);


module.exports = BusinessRouter;