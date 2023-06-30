const { Router } = require('express');
const { createCommentHandler, commentByIdHandler, updateCommentHandler, deleteCommentHandler } = require('../../handlers/commentsHandlers/commentsHandlers');

const commentRouter = Router();

commentRouter.post ( "/", createCommentHandler ); //Crear nuevo comentario 
commentRouter.get ( "/:id", commentByIdHandler ); //Encontrar comentario
commentRouter.put ( "/:comment", updateCommentHandler ); //Actualizar comentario
commentRouter.delete ( "/:id", deleteCommentHandler ); //Borrar comentario 


module.exports = commentRouter;