import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostUser } from "../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import CardsContainer from "./CardsContainer";

const Home = () => {
  const [selectedField, setSelectedField] = useState(null);
  const [newNewsContent, setNewNewsContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const dispatch = useDispatch();

  const handleCreateNews = () => {
    const postData = {
      content: newNewsContent,
      title,
      image,
      profileImage,
      description,
      details,
    };

    dispatch(createPostUser(postData)); // Llama a la acción createPostUser y envía los datos de la nueva publicación
    setNewNewsContent("");
    setTitle("");
    setImage("");
    setProfileImage("");
    setDescription("");
    setDetails("");
    setShowModal(false); // Cierra el modal después de crear la publicación
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 offset-2">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12">
                <div className="mb-4">
                  <button className="btn btn-primary fixed top-4 right-0 mt-5 ml-4 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setShowModal(true)}>
                    Crear Publicación
                  </button>
                </div>
                <CardsContainer selectedField={selectedField} setSelectedField={setSelectedField} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para agregar una nueva publicación */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Publicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Campos para ingresar los datos de la nueva publicación */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Título</label>
            <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Imagen</label>
            <input type="text" className="form-control" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="profileImage" className="form-label">Imagen de Perfil</label>
            <input type="text" className="form-control" id="profileImage" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Descripción de la Publicación</label>
            <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="details" className="form-label">Detalles de la Publicación</label>
            <textarea className="form-control" id="details" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleCreateNews}>
            Crear
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;

