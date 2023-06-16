import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardDetail = ({ onCloseDetail }) => {
  return (
    <div className="card text-bg-dark" style={{ position: 'fixed', top: '40%', left: '80%', transform: 'translate(-50%, -50%)' }}>
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer text-body-">
        2 days ago
      </div>
      <button className="btn btn-secondary" onClick={onCloseDetail}>Close</button>
    </div>
  );
};

export default CardDetail;

