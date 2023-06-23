import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import PostCommunity from "./PostCommunity";

const MyPostCommunity = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.allPosts);


  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);



  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center mt-10 mr-8">
        <div className="flex items-center justify-between w-full mb-4 mt-8">
          <h2 className="text-3xl font-bold text-teal-700 ml-[20vw]">COMMUNITY</h2>
      <div className="flex">
        <div>
          <span
            className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2"
          >
            MY POSTS
          </span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-[20vw]">
          {posts.map((post) => (
            <PostCommunity key={post.id_post} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPostCommunity;