const mercadopago = require("mercadopago");

const createOrderHandler = async (req, res) => {
  mercadopago.configure({
    access_token: "TEST-2308257350740153-062100-111117abff65792b62f61706bd509b38-1390863745",
  });

  try {
    const preference = {
      items: [
        {
          title: "Verificacion empresarial",
          unit_price: 100,
          quantity: 1, // Agrega la cantidad aquí
          currency_id: "USD",
        },
      ],
      back_urls: {
        success: "http://localhost:3001/success",
        failure: "http://localhost:3001/failure",
        pending: "http://localhost:3001/pending",
      },
      notification_url: "http://localhost:3001/webhook",
    };

    const response = await mercadopago.preferences.create(preference);
    console.log(response);
    res.send(response.body);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear la orden");
  }
};

const receiveWebhook = (req, res) => {
  console.log(req.query);
  res.send("webhook");
};









module.exports = {
    createOrderHandler,
    receiveWebhook
}