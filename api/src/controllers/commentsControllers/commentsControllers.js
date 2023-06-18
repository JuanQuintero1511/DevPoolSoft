const {Comments} = require('../../db');

const createNewComment = async (description) => {
        const newComment = await Comments.create({description});
        return newComment;
}

const getCommentById = async (id) => {
        const commentsById = await Comments.findByPk({id})
        return commentsById;
}

const updateComents = async (id, description) => {
        const commentsUpdateResult = await Comments.update(
          { description: description },
          { where: { id_coments:  id } }
        );
        return commentsUpdateResult;
}


const deleteComment = async (comment) => {
        const comentDelete = await Comments.destroy({comment});
        return comentDelete;
} 


module.exports = {
    createNewComment,
    getCommentById,
    updateComents,
    deleteComment
}