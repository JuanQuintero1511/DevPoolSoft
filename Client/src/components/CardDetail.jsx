import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CardDetail = ({ onCloseDetail }) => {
  return (
    <div className="card-detail" style={{ width: '20rem', position: 'absolute', top: '0', left: '100%', marginLeft: '50px' }}>
      <div className="card">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
           <button className="btn btn-secondary" onClick={onCloseDetail}>Close</button>  
        </div>
      </div>
    </div>
  );
};

export default CardDetail;

    

