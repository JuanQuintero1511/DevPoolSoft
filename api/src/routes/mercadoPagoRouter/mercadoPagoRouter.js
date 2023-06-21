const { Router } = require ("express");
const { createOrderHandler } = require ('../../handlers/mercadoPagoHandlers/mercadoPagoHadles');

const mercadoPagoRouter = Router();

mercadoPagoRouter.get ("/", createOrderHandler); // Crear pago
// mercadoPagoRouter.delete ("/", deleteOrder) // Borrar pago 
 
module.exports = mercadoPagoRouter
