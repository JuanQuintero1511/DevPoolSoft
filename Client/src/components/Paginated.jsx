//*paginado

import React from "react";

const Paginated = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav>
      <ul className="flex justify-center items-center space-x-2 mt-4 mb-4">
        {currentPage > 1 && (
          <li>
            <button
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md shadow-md"
              onClick={handlePreviousPage}
            >
              Previous
            </button>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`${
                number === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } py-2 px-4 rounded-md shadow-md`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}

        {currentPage < totalPages && (
          <li>
            <button
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md shadow-md"
              onClick={handleNextPage}
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Paginated;


