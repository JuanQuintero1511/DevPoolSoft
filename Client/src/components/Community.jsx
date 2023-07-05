import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import PostCommunity from "./PostCommunity";
import CreatePostCommunity from "./CreatePostCommunity";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
//*paginado
import Paginated from "./Paginated";

const Community = () => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, showModal]);


  const posts = useSelector((state) => state.allPosts);
  const user = useSelector((state) => state.userLogin);


console.log(posts);

  const closeModal = () => {
    setShowModal(!showModal);
  }

  //*paginado
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex flex-col items-center mt-10 mr-8">
        <div className="flex items-center justify-between w-full mb-4 mt-8">
          <h2 className="text-3xl font-bold text-teal-700 ml-[20vw]">COMMUNITY</h2>
          <div className="flex">
            <div>
              <Link to={`/community/myposts/${user?.user_datum?.id_user_data}`}>
                <button
                  className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2"
                >
                  MY POSTS
                </button>
              </Link>
            </div>
            <div>
              <button
                onClick={() => {
                  if (user?.user_datum?.id_user_data) {
                    setShowModal(true);
                  } else {
                    Swal.fire({
                      icon: 'error',
                      title: 'Sorry..',
                      text: 'You need to register to create posts.',
                      confirmButtonColor: '#ff7f7f',
                    });
                  }
                }}
                className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                CREATE POST
              </button>
            </div>
          </div>
          {showModal && <CreatePostCommunity closeModal={closeModal} />}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-[20vw]">
          {posts && posts
            .filter((post) => post.typePost === "Community")
            .map((post) => (
              <PostCommunity key={post.id_post} post={post} />
            ))}
        </div>


        <Paginated
          currentPage={currentPage}
          totalPages={Math.ceil(posts.length / postsPerPage)}
          onPageChange={handlePageChange}
        />

      </div>
    </div>
  );

}

export default Community;

