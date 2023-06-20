const {Comments} = require('../../db');

const createNewComment = async (description, id_posts) => {
        const newComment = await Comments.create({description, id_posts});
        return newComment;
}

const getCommentById = async (id_coments) => {
        const commentsById = await Comments.findByPk(id_coments)
        return commentsById;
} 

const updateComents = async (id, description, id_posts) => {
        const commentsUpdateResult = await Comments.update(
          { description: description },
          { where: { id_coments:  id, id_posts: id_posts } }
        );
        return commentsUpdateResult;
}


const deleteComment = async (comment) => {
        const comentDelete = await Comments.destroy(comment);
        return comentDelete;
} 


module.exports = {
    createNewComment,
    getCommentById,
    updateComents,
    deleteComment
}