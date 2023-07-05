import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getAllPostsIdUser } from "../redux/actions";
import CardMyPostCommunity from "./CardMyPostsCommunity";
import CreatePostCommunity from "./CreatePostCommunity";
import Swal from 'sweetalert2';

const MyPostCommunity = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.allPostsIdUser.posts);
  const user = useSelector((state) => state.allPostsIdUser.full_name);
  const [showModal, setShowModal] = useState(false)

  const userId = useSelector((state) => state.userLogin);


  useEffect(() => {
    dispatch(getAllPostsIdUser(id));

  }, [dispatch, id, showModal]);

  const closeModal = () => {
    setShowModal(!showModal);
  }


  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex flex-col items-center mt-10 mr-8">
        <div className="flex items-center justify-between w-full mb-4 mt-8">
          <h2 className="text-3xl font-bold text-teal-700 ml-[20vw]">COMMUNITY</h2>
          <div className="flex">
            <div>
              <Link to={`/community`}>
                <button
                  className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2"
                >
                  ALL POSTS
                </button>
              </Link>
            </div>
            <div>
              <button
                onClick={() => {
                  if (userId?.user_datum?.id_user_data) {
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
        {posts?.length > 0 ? 
        <div className= "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-[20vw]">
          {posts && posts
            .filter((post) => post.typePost === "Community")
            .map((post) => (
            <CardMyPostCommunity key={post.id_post} post={post} user={user} />
          ))}
        </div>
        : 
        <h1 className="text-3xl font-bold text-red-500 mt-20">
          You don't have any post yet.
        </h1>
        }
      </div>
    </div>
  );
}

export default MyPostCommunity;