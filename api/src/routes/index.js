const { Router } = require('express');
const router = Router();

// Importa los routers individuales
const UsersRouter = require('./users/userroutes');
const PostsRouter = require('./posts/postsRoutes');


// Agrega los routers al enrutador principal
router.use('/users', UsersRouter);
router.use('/posts', PostsRouter);
// Agrega más routers si es necesario

module.exports = router;