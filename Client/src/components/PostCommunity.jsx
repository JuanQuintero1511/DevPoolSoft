import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from "react-redux";
import { deletePostUser } from "../redux/actions";


const PostCommunity = ({ post }) => {

  const userLogin = useSelector((state) => state.userLogin);
  console.log(userLogin);

   const dispatch = useDispatch();

  const handleSubmit = (event) => {
    Swal.fire({
      icon: 'question',
      title: 'Are you sure?',
      text: 'This action cannot be undone.',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePostUser(post.id_post));
        window.location.reload();
      }
    });
  };

  return (
    <div className="bg-gray-100">
        <div key={post.id_post} className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          <div className="mb-4">
            <Link to={`/community/${post.id_post}`}>
              <h2 className="text-2xl font-bold text-blue-500 hover:text-blue-700">
                {post.title}
              </h2>
            </Link>
          </div>

          <div className="mb-2 flex items-center">
            <span role="img" aria-label="Developer">🧑🏻‍💻 </span>
            <span className="font-bold"> {post.user_datum?.full_name}</span>
          </div>

          <div className="flex">
            <Link to={`/community/${post.id_post}`}>
              <button className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Read More
              </button>
            </Link>
          </div>
          <div className="flex justify-between items-center mt-4">
          {userLogin.user_datum?.rol === "admin" &&
          <div>
            <button onClick={handleSubmit} title="Delete" className="mr-2">
              ❌
            </button>          
          </div>
          }
            <div className="flex justify-end">
              <div className="mr-4">
                <span className="text-gray-600">❤️ </span>
                <span className="font-bold"> {post.likes}</span>
              </div>
              <div className="ml-2">
                <span>✉️ </span>
                <span className="font-bold"> {post.comments.length} </span>
              </div>
            </div>
            </div>
        </div>
      
    </div>
  );
};

export default PostCommunity;

