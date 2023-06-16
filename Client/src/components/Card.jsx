import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ title, showDetail, onToggleDetail }) => {
  return (
    <div className="card text-center">
      <h5 className="card-title">{title}</h5>
      <img
        src="https://i.redd.it/al4qtxxamz5b1.jpg"
        className="card-img-top"
        alt="Card"
        style={{ maxHeight: '250px', maxWidth: '400px', alignSelf: 'center' }}
      />
      <div className="card-body">
        <p className="card-text">BREVE DESCRIPCION</p>
        {showDetail ? (
          <div>
            <p>Detalles de la tarjeta...</p>
            {/* Aquí puedes mostrar los detalles específicos de la tarjeta */}
          </div>
        ) : (
          <button className="btn btn-primary" onClick={onToggleDetail}>
            Go somewhere
          </button>
        )}
      </div>
      <div className="card-footer text-body-secondary">2 days ago</div>
    </div>
  );
};

export default Card;
