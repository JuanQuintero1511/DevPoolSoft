const { Router } = require('express');

// Importa los routers individuales
const companyRouter = require('./companyRouter');
const postsRouter = require('./postsRoutes');

const router = Router();

// Agrega los routers al enrutador principal
router.use('/company', companyRouter);
router.use('/posts', postsRouter);
// Agrega más routers si es necesario

module.exports = router;