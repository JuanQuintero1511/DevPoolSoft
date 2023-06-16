const { Router } = require('express');

// Importa los routers individuales
const companyRouter = require('../routes/companyRouter/companyRouter');
const postsRouter = require('../routes/postRouter/postsRouter');

const router = Router();

// Agrega los routers al enrutador principal
router.use('/company', companyRouter);
router.use('/posts', postsRouter);
// Agrega más routers si es necesario

module.exports = router;