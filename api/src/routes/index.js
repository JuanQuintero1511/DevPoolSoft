const { Router } = require('express');
const router = Router();

// Importa los routers individuales
const UsersRouter = require('./users/userroutes');


// Agrega los routers al enrutador principal
router.use('/users', UsersRouter);
// Agrega más routers si es necesario

module.exports = router;