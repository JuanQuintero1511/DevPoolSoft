import React, { useState } from 'react';

const Card = ({ post ,imageUrl}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetail = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (
    <div className="card rounded-lg shadow-lg my-4 border-success" style={{ width: '450px' }}>
      <div className="card-header d-flex align-items-center p-2">
        <img
          src={post.imagenperfil}
          className="rounded-circle me-2"
          style={{ width: '40px', height: '40px' }}
          alt="Imagen de perfil"
        />
        <h5 className="card-title m-0">{post.title}</h5>
      </div>
      <img
        src={imageUrl}
        className="card-img-top rounded-t-lg w-50"
        alt="Imagen de la publicación"
        style={{ alignSelf: 'center' }}
      />
      <div className="card-body p-1"></div>

      <div className="d-flex" style={{ alignSelf: 'flex-end' }}>
        <button className="btn btn-link btn-sm">
          <i className="bi-heart-fill me-1 text-danger"></i>
        </button>
        <button className="btn btn-link btn-sm">
          <i className="bi-share-fill me-1"></i>
        </button>
        <button className="btn btn-link btn-sm">
          <i className="bi-chat-fill me-1"></i>
        </button>
      </div>
      <hr />
      <p className="card-text text-gray-600">{post.body}</p>
      {!showDetails && (
        <button
          className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={handleToggleDetail}
        >
          Ver Detalles
        </button>
      )}

      {showDetails && (
        <div
          className="card-detail"
          style={{
            width: '20rem',
            position: 'absolute',
            top: '0',
            left: '100%',
            marginLeft: '50px'
          }}
        >
          <div className="card border-success">
            <h5 className="card-header">Aplica Ahora</h5>
            <div className="card-body">
              <h5 className="card-title">{post.titulo}</h5>
              <p className="card-text">{post.detalles}</p>

              <button
                className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={handleToggleDetail}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;



