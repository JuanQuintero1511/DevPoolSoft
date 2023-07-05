import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import CreatePostTechNews from "./CreatePostTechNews";
import CardsContainer from "./CardsContainer";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 offset-2">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12">
                <div className="mb-4">
                  <button
                    className="btn btn-primary fixed top-4 right-0 mt-5 ml-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setShowModal(true)}
                  >
                    Crear Publicación
                  </button>
                </div>
                <CardsContainer />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Agregar Publicación</Modal.Title>
        </Modal.Header> */}
          <CreatePostTechNews closeModal={closeModal} />
        {/* <Modal.Body>
        </Modal.Body> */}
      </Modal>
      <CardsContainer />
    </div>
  );
};

export default Home;



