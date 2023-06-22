const { Router } = require("express");

const {
 getDevDataHandler,
 postDevDataHandler,
 getDevDataById}  = require("../../handlers/devDataHandlers/devDataHandlers.js");

// const {deleteDevDatas} = require("");

const devDataRouter = Router();


devDataRouter.get("/", getDevDataHandler);
devDataRouter.post("/", postDevDataHandler);
devDataRouter.get("/:id", getDevDataById);
// DevDatasRouter.put("/:id", updateDevDatas);
// DevDatasRouter.delete("/:id", deleteDevDatas);


module.exports= devDataRouter;