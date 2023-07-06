import React, { useState } from 'react';

const Card = ({ post }) => {
  const [likesCount, setLikesCount] = useState(0);
  

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
            </div>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;



