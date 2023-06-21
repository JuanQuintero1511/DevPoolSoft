const { Router } = require('express');

// Importa los routers individuales
const companyRouter = require('../routes/companyRouter/companyRouter');
const postsRouter = require('../routes/postsRouter/postsRouter');
const commentRouter = require('../routes/commentsRouter/commentsRouter');
const loginRouter = require('../routes/loginRouter/loginrouter');
const usersRouter = require('../routes/usersRouter/usersRouter');

const router = Router();

// Agrega los routers al enrutador principal
router.use('/company', companyRouter);
router.use('/posts', postsRouter);
router.use('/comments', commentRouter);
router.use('/login', loginRouter);
router.use('/users', usersRouter)
// Agrega más routers si es necesario

module.exports = router;