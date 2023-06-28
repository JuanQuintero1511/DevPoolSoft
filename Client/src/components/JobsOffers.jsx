import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import { useState, useEffect } from "react";
import OffersCards from "./OffersCards";
import CreatePostModal from "./CreatePostModal";
import Swal from 'sweetalert2';


const JobsOffers = () => {

const user = useSelector((state) => state.userLogin);
const posts = useSelector((state) => state.allPosts);
const [showModal, setShowModal] = useState(false);


const closeModal = () => {
  setShowModal(!showModal);
}
 
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getAllPosts());
   }, [dispatch]);
  
  

  

  // const addPost = (newPost) => {
  //   setSimilpostArray([...similpostArray, newPost]);
  // };

  
  


 

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
            className="relative inline-flex items-center justify-center px-9 py-3 overflow-hidden font-mono font-medium tracking-normal text-white bg-gray-800 rounded-lg group"
            >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-teal-200"></span>
            <span className="relative">CREATE POST</span>
        </button>
      </div>
      {showModal && <CreatePostModal  closeModal={closeModal} />}
     <div className="grid grid-cols-3 gap-5 mt-16 py-4 ml-14">
        {posts.filter((post) => post.typePost === "Job").map((filteredPost) => (
  <OffersCards key={filteredPost.id_post} post={filteredPost} />
))}
      </div> 
    </div>
  );
};

export default JobsOffers;
