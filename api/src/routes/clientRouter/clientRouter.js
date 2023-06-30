const { Router } = require("express");

const {
    getClientHandler,
    getClientHandlerId,
    createClientHandler,
    updateClientPremiumHandler,
    deleteClientHandler
 } = require("../../handlers/clientHandlers/clientHandlers")


const clientRouter = Router();

clientRouter.get("/", getClientHandler);
clientRouter.post("/", createClientHandler);
clientRouter.get("/:id", getClientHandlerId)
clientRouter.put("/:full_name", updateClientPremiumHandler);
clientRouter.delete("/:id", deleteClientHandler);


module.exports = clientRouter;