const mercadopago = require ("Mercadopago")
// const { createOrder, deleteOrder } = require ("../../controllers/mercadoPagoControllers/mercadoPagoControllers");

const createOrderHandler = async (req, res) => {
    // const createOrder = req.body;
    try {
        mercadopago.configure({ // Conectividad con mercadoPago
            access_token:
            "TEST-2308257350740153-062100-111117abff65792b62f61706bd509b38-1390863745",
        });

        const result = await mercadopago.preferences.create ({ // Creacion de orden de venta
            items: [
                {
                    title: "Verificacion empresarial",
                    unit_price: 100,
                    currency_id: "USD",
                }
            ]
        })
        return res.status(200).json (result);
    } catch (error) {
        res.status(400).json({error: error.message });
    }
}


const receiveWebhook = () => {}
// const deleteOrderHandler = (req, res) => {

// }






module.exports = {
    createOrderHandler,
    // deleteOrderHandler
}