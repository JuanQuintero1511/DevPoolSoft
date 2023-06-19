import { useState } from 'react';

const JobDetailsModal = ({ post, handleCloseModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);



  const handleApplyJob = () => {
    // Lógica para inscribirse al trabajo
  };

  const handleSaveJob = () => {
    // Lógica para guardar el trabajo como favorito
  };

  return (
    <>
     
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-1/2">
            {/* Encabezado del modal */}
            <div className="p-4 flex items-center justify-between bg-teal-700 text-white">
              <h3 className="text-2xl font-bold">{post.title}</h3>
              <button
                className="text-white hover:text-gray-300 focus:outline-none"
                onClick={handleCloseModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-4">
              <img
                src={post.companyLogo}
                alt="Logo de la empresa"
                className="w-32 h-32 mx-auto mb-4"
              />
              <p>{post.description}</p>
              <div className="flex items-center mt-4">
                <img
                  src={post.interviewerImage}
                  alt="Foto del entrevistador"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <p>Interviewer name: </p>
                <p className="text-sm"> {post.interviewerName}</p>
              </div>
            </div>

            {/* Botones del modal */}
            <div className="flex justify-end p-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4"
                onClick={handleApplyJob}
              >
                Join to us!
              </button>
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg"
                onClick={handleSaveJob}
              >
                Save job for later
              </button>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default JobDetailsModal;
