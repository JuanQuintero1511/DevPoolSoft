import React, { useState } from "react";

const CreatePostCommunity = ({ addPost, closeModal }) => {
    const [title, setTitle] = useState("");
    const [resume, setResume] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let counter = 9;
        // Generar un nuevo ID para el post
        const id = counter + 1;

        // Crear el nuevo post
        const newPost = {
            id,
            title,
            resume,
            description,
            companyLogo: "https://assets.soyhenry.com/logoOG.png",
            interviewerImage: "https://example.com/interviewer.jpg",
            interviewerName: "John Doe",
            imageLink
        };

        // Agregar el nuevo post a la matriz
        addPost(newPost);

        // Restablecer los campos del formulario
        setTitle("");
        setResume("");
        setDescription("");
        setImageLink("");
    };

    const handleImageUpload = (event) => {
        // lógica para subir la imagen
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

                <div className="flex justify-between">
    <h2 className="text-xl font-bold mb-2">CREATE A NEW POST</h2>
    <button
        type="button"
        onClick={closeModal}
        className="select-none rounded-lg bg-red-600 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-[2rem] h-[2rem]"
    >
        X
    </button>
</div>


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
                        Description:
                    </label>
                    <textarea
                        id="resume"
                        className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
                        value={resume}
                        onChange={(event) => setResume(event.target.value)}
                        required
                    ></textarea>
                    <label htmlFor="image" className="block mb-2">
                        Image:
                    </label>
                    <div className="flex">
                        <input
                            type="file"
                            id="image"
                            className="border border-gray-300 px-3 py-2 rounded-l-md w-full mb-2"
                            accept="image/*"
                            onChange={(event) => handleImageUpload(event)}
                        />
                    </div>
                    {/* Add any necessary image preview or validation here */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            onClick={closeModal}
                        >
                            CREATE POST
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePostCommunity;
