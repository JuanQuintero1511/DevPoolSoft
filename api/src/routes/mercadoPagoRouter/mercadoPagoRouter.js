const { Router } = require ("express");
const { createOrderHandler } = require ('../../handlers/mercadoPagoHandlers/mercadoPagoHadles');

const mercadoPagoRouter = Router();

mercadoPagoRouter.post ("/", createOrderHandler); // Crear pago
mercadoPagoRouter.get ('/success', createOrderHandler);
mercadoPagoRouter.get ('/failure', createOrderHandler);
mercadoPagoRouter.get ('/pendig', createOrderHandler);
mercadoPagoRouter.post ('/webhook', createOrderHandler);
// mercadoPagoRouter.delete ("/", deleteOrder) // Borrar pago 
 
module.exports = mercadoPagoRouter
