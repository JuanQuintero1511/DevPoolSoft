const express = require('express');
const router = express.Router();

// Importa los routers individuales
const postUsers = require('./users/userroutes');
// Agrega los routers al enrutador principal
// router.use('/', postUsers);
// Agrega más routers si es necesario

module.exports = router;