const { Router } = require('express');

// Importa los routers individuales
const CompanyRouter = require('./companyRouter/companyRouter');
const PostsRouter = require('./postRouter/postsRouter');

const router = Router();

// Agrega los routers al enrutador principal
router.use('/company', CompanyRouter);
router.use('/posts', PostsRouter);
// Agrega más routers si es necesario

module.exports = router;