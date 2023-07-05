import React, { useState } from 'react';
import { deletePostUser, updatePostUser } from '../redux/actions';
import { useDispatch } from 'react-redux';

const Card = ({ post }) => {
  const dispatch =useDispatch();
  const [likesCount, setLikesCount] = useState(0);
  // const [editedPost , setEditedPost] =useState(post)


  const handleDelete = () => {
    dispatch(deletePostUser(post.id_post));
  }

  // const handleUpdate = () => {
  //   dispatch(updatePostUser(post.id_post, editedPost))
  // }
  
  const handleLikeClick = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <div className="card mb-3" key={post.id}>
      <div className="row g-0">
        <div className="col-md-4">
          {post.image && <img src={post.image.url} alt={post.title} className="img-fluid rounded-start" />}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-2x1 font-bold text-black">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <div className="space-x-6">
              <i className="bi bi-heart-fill me-1 text-danger" onClick={handleLikeClick}></i>
              <span>{likesCount}</span>
              <i className="bi bi-share-fill me-1"></i>
              <i className="bi bi-chat-fill me-1"></i>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Eliminar
              </button>
            </div>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Confirmación</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>¿Estás seguro de que deseas eliminar este posteo?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card;



