import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CommentsCommunity = () => {

  const post = useSelector((state) => state.idPost);

  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex flex-col items-center mt-10 mr-8">
        <div className="flex items-center justify-between w-full mb-4 mt-8">
          <h2 className="text-3xl font-bold text-teal-700 ml-[20vw]">COMMUNITY</h2>
          <div className="flex">
            
              <button className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2">
                ADD COMMENT
              </button>
            
          </div>
        </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 ml-[350px] mt-3 mr-4">
          <div className="mb-4">
            <span>🧑🏻‍💻 </span>
            <span className="font-bold">{post.user_datum?.full_name}</span>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold underline text-blue-500">{post.title}</h2>
          </div>
        </div>

        {post.comments &&
          post.comments.map((com) => (
            <div key={com.id_comments} className="bg-white rounded-lg shadow-md p-4 ml-[350px] mt-3 mr-4">
              <span>🧑🏻‍💻 </span>
              <span className="font-bold">{com.user_datum?.full_name}</span>
              <h3>{com.description}</h3>
            </div>
          ))}
      </div>
    
  );
}

export default CommentsCommunity;