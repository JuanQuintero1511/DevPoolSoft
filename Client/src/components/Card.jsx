import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDetail from './CardDetail';


const Card = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleToggleDetail = () => {
    if (!buttonClicked) {
      setShowDetail(!showDetail);
      setButtonClicked(true);
    }
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setButtonClicked(false);
  };

  return (
    <div className="card bg-white rounded-lg shadow-lg" style={{ width: '450px',  marginLeft: '100px', marginTop:'50px' }}>
      <div className="card-header d-flex align-items-center p-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPVTYhTBmrVTQl-bZzTn7z0rEdrN6G-0RqQ&usqp=CAU" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} alt="Imagen de perfil" />
        <h5 className="card-title m-0">Título de la publicación</h5>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfo_i9-se_ckyc7ALb6lb3m9Kwe1IehODtyAEdGF8PET9AJsd8tm7FLQcqLckbdAEWJI&usqp=CAU" className="card-img-top rounded-t-lg w-50"  alt="Imagen de la publicación" style={{alignSelf: 'center'}}  />
      <div className="card-body p-1">
      </div>

      <div className="d-flex" style={{alignSelf: 'flex-end'}}>
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
      <p className="card-text text-gray-600">Descripción de la publicación</p>
      {!showDetail && (
        <button className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={handleToggleDetail} disabled={buttonClicked}>
          Ver Detalles
        </button>
      )}

      {showDetail && (
        <div className="card-detail" style={{ width: '20rem', position: 'absolute', top: '0', left: '100%', marginLeft: '50px' }}>
          <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

              <button className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={handleCloseDetail}>
                Cerrar
              </button>
              <button className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"  style={{marginLeft:'5px'}}>
                APLICA
              </button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;






