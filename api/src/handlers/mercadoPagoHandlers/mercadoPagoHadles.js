const mercadopago = require ("Mercadopago")

const createOrderHandler = async (req, res) => {

    
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
            ],
            back_urls: {
                success: "http://localhost:3001/success",
                failure: "http://localhost:3001/failure",
                peding: "http://localhost:3001/peding"
            },
            notification_url: 'http://localhost:3001/webhook',
        });
        console.log(result);
 
        res.send('creando orden');
}

    

const receiveWebhook = (req, res) => {
    console.log(req.query);
    res.send('webhook');
}







module.exports = {
    createOrderHandler,
    receiveWebhook
}