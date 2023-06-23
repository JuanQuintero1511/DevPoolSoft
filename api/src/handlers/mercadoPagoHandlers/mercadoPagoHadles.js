require('dotenv').config();
const mercadopago = require("mercadopago");
const {Mercado_pago} = require('../../controllers/mercadoPagoControllers/mercadoPagoControllers.js');
const {MERCADOPAGO_TOKEN} = process.env;
4
const createOrderHandler = async (req, res) => {
    mercadopago.configure({
      access_token: `${MERCADOPAGO_TOKEN}`,
    });
  
    try {
      const preference = {
        items: [
          {
            title: "Verificacion empresarial",
            unit_price: 100,
            quantity: 1,
            currency_id: "USD",
          }
        ],
        back_urls: {
          success: "http://localhost:3001/success",
          failure: "http://localhost:3001/failure",
          pending: "http://localhost:3001/pending",
        },
        notification_url: "http://localhost:3001/webhook",
      };
  
      const response = await mercadopago.preferences.create(preference);
      
      const publicidad = {
        items: [
          {
            title: "Publicidad",
            unit_price: 50,
            quantity: 1,
            currency_id: "USD",
          }
        ],
        back_urls: {
          success: "http://localhost:3001/success",
          failure: "http://localhost:3001/failure",
          pending: "http://localhost:3001/pending",
        },
        notification_url: "http://localhost:3001/webhook",
      };
  
      const publi = await mercadopago.preferences.create(publicidad);
  
      res.json({
        order: response.body,
        publicidad: publi.body,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al crear la orden");
    }
  };
  
  const receiveWebhook = async (req, res) => {
    const {id_pay} = req.body; // database
    const payment = req.query;
  
    try {
      if (payment === 'payment') {
        const data = await mercadopago.payment.findById(req.query['data.id']);
        //store in database
        const database = await Mercado_pago (id_pay);
        return data, database;
      }
  
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  };








module.exports = {
    createOrderHandler,
    receiveWebhook
}