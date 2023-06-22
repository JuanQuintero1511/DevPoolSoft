const { Mercado_pago } = require('../../db')

const createOrder = async (TypeOfService) => {
   const newOrder = await Mercado_pago.create ({TypeOfService})
   return newOrder
}

const deleteOrder = (req, res) => {
    res.send("Funcionando Delete")
}

module.exports = {
    createOrder,
    deleteOrder
}