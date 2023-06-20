import React, { useState } from "react";

const CreatePostModal = ({ addPost, closeModal }) => {
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let counter = 9
    // Generar un nuevo ID para el post
    const id = counter + 1

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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={() => closeModal()}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="block mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <label htmlFor="resume" className="block mb-2">
            Resume:
          </label>
          <textarea
            id="resume"
            className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
            value={resume}
            onChange={(event) => setResume(event.target.value)}
            required
          ></textarea>
          <label htmlFor="description" className="block mb-2">
            Description:
          </label>
          <textarea
            id="description"
            className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={closeModal}
          >
            Create Post
          </button>
          <button
            type="submit"
            className="fixed ml-[140px] bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={closeModal}
          >
            X
          </button>


        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
