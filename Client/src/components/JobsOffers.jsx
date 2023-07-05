import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import { useState, useEffect } from "react";
import OffersCards from "./OffersCards";
import CreatePostModal from "./CreatePostModal";
import Swal from 'sweetalert2';

import Paginated from "./Paginated";
import { Link } from "react-router-dom";



 const JobsOffers = () => {

  const user = useSelector((state) => state.userLogin);
  const posts = useSelector((state) => state.allPosts);
  const selectedTipoEmpleo = useSelector((state) => state.selectedTipoEmpleo);
  const selectedCargo = useSelector((state) => state.selectedCargo);
  const jobPosts = posts.filter((post) => post.typePost === "Job");
  const [showModal, setShowModal] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);
  
  const dispatch = useDispatch();

 
  useEffect(() => {
    const filtered = filterPosts();
    setFilteredPosts(filtered);
    dispatch(getAllPosts());
  }, [selectedTipoEmpleo, selectedCargo]);
   

  const filterPosts = () => {
    let filtered = posts.filter((post) => {
      if (selectedTipoEmpleo && post.tipoEmpleo.toLowerCase() !== selectedTipoEmpleo.toLowerCase()) {
        return false;
      }
      if (selectedCargo && post.cargo.toLowerCase() !== selectedCargo.toLowerCase()) {
        return false;
      }
      return true;
    });
    return filtered;
  };

  const closeModal = () => {
    setShowModal(false);
  };
  //paginado
   const [currentPage, setCurrentPage] = useState(1);
   const postsPerPage = 6;

   const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jobPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleTipoEmpleoChange = (tipoEmpleo) => {
    if (selectedTipoEmpleo.includes(tipoEmpleo)) {
      setSelectedTipoEmpleo(prevState => prevState.filter(item => item !== tipoEmpleo));
    } else {
      setSelectedTipoEmpleo(prevState => [...prevState, tipoEmpleo]);
    }
  };

  const handleCargoChange = (cargo) => {
    if (selectedCargo.includes(cargo)) {
      setSelectedCargo(prevState => prevState.filter(item => item !== cargo));
    } else {
      setSelectedCargo(prevState => [...prevState, cargo]);
    }
  };
   
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 bg-cover">
      <div className="absolute top-16 right-8">
        <button onClick={() => 
          {if(user?.user_datum?.rol === "company") {
            setShowModal(true)
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Need to be a company',
              text: 'Please complete your profile before create a post',
    });
          }}
          }
            className="relative inline-flex items-center justify-center px-9 py-3 overflow-hidden font-mono font-medium tracking-normal text-white bg-gray-800 rounded-lg group z-50"
            >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-teal-200"></span>
            <span className="relative">CREATE POST</span>
        </button>
        <Link to={`/JobsOffers/myposts/${user?.user_datum?.id_user_data}`}>
        <button onClick={() => 
          {if(user?.user_datum?.rol === "company") {
            setShowModal(true)
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Need to be a company',
              text: 'Please complete your profile before create a post',
    });
          }}
          }
            className="relative inline-flex items-center justify-center px-9 py-3 overflow-hidden font-mono font-medium tracking-normal text-white bg-gray-800 rounded-lg group mx-1 z-50"
            >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-teal-200"></span>
            <span className="relative">MY POST</span>
        </button>
              </Link>
      </div>
      {showModal && <CreatePostModal  closeModal={closeModal} />}
     <div className="grid grid-cols-3 gap-5 mt-16 py-4 ml-14">
       
     {currentPosts.map((post) => (
          <OffersCards key={post.id_post} post={post} />
        ))}

      </div> 
      <Paginated
        currentPage={currentPage}
        totalPages={Math.ceil(posts.length / postsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default JobsOffers;
