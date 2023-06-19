import { useState } from "react";

const CreatePostModal = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generar un nuevo ID para el post
    const id = similpostArray.length + 1;

    // Crear el nuevo post
    const newPost = {
      id,
      title,
      resume,
      description,
      companyLogo: "https://assets.soyhenry.com/logoOG.png",
      interviewerImage: "https://example.com/interviewer.jpg",
      interviewerName: "John Doe",
    };

    // Agregar el nuevo post a la matriz
    addPost(newPost);

    // Restablecer los campos del formulario
    setTitle("");
    setResume("");
    setDescription("");
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => closeModal()}>
          &times;
        </span>
        <h2>Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <label htmlFor="resume">Resume:</label>
          <textarea
            id="resume"
            value={resume}
            onChange={(event) => setResume(event.target.value)}
            required
          ></textarea>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          ></textarea>
          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
