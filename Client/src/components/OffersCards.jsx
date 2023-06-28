import Swal from 'sweetalert2';
import JobDetailsModal from './JobDetailModal';
import { useState } from 'react';

const OffersCards = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const job = {
    title: 'Front-end Developer',
    companyLogo: 'https://assets.soyhenry.com/logoOG.png',
    description: 'Se busca desarrollador front - end con conocimientos básicos en .... ',
    interviewerImage: 'https://media.licdn.com/dms/image/D4D03AQEDYKxuV3JQmw/profile-displayphoto-shrink_800_800/0/1668954368648?e=2147483647&v=beta&t=JnHxa2ZPUttvVhIkToKtgV9f_7rEH9sRJyPm5oEkpok',
    interviewerName: 'Daiana A. Grilla',
  };

  return (
    <div className="relative flex w-86 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img
          src={post.image?.url}
          layout="fill"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {post.title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {post.resume}
        </p>
        <span className="text-gray-600">❤️</span>
        <span className="font-bold">{post.likes}</span>
        <span className="text-gray-600"> 📨 </span>
        <span className="font-bold">{post.comments}</span>
      </div>
      <div className="p-6 pt-0">
        <button
          className="select-none rounded-lg bg-teal-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
          onClick={handleOpenModal}
        >
          Read More
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-900 bg-opacity-50 z-50">
          <JobDetailsModal post={post} handleCloseModal={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default OffersCards;
