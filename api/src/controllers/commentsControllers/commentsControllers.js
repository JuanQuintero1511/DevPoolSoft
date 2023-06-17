const {Comments} = require('../../db');

const createNewComment = async (description) => {
        const newComment = await Comments.create({description});
        return newComment;
}

const getCommentById = async (id) => {
    try{
        const commentsById = await Comments.findByPk({id})
        return commentsById;
    } catch (error) {
        throw new Error ('El comentario no ha sido encontrado' + error.message);
    }
}

const updateComents = async (id, description) => {
    try {
        const commentsUpdateResult = await Comments.update(
          { description: description },
          { where: { id_coments:  id } }
        );
        return commentsUpdateResult;
      } catch (error) {
        throw new Error('Error al actualizar el comentario: ' + error.message);
      }
}


const deleteComment = async (comment) => {
    try {
        const comentDelete = await comment.destroy({})
        return comentDelete;
    }catch (error) {
        throw new Error ('El comentario no ha sido borrado con exito' + error.message);
    }
} 


module.exports = {
    createNewComment,
    getCommentById,
    updateComents,
    deleteComment
}