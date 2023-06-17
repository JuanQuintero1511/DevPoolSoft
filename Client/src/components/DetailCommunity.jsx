import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../redux/actions";


const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      dispatch(getPostById(id))
        // .then(() => {
        //   setIsLoading(false)
        // })
    }, [dispatch, id]);
  
    const post = useSelector((state) => state.idPost);
  

  return (
    <div className="bg-white rounded-lg shadow-md p-4 ml-[250px]">
      <div className="mb-2">
        <span className="text-gray-600">User: </span>
        <span className="font-bold">{post.user}</span>
      </div>
      <div className="mb-2">
        <span className="text-gray-600">Date: </span>
        <span className="font-bold">{post.date}</span>
      </div>
      <div className="mb-2">
        <span className="text-gray-600">Title: </span>
        <span className="font-bold">{post.title}</span>
      </div>
      <div className="mb-4">
        {post.image && (
          <img src={post.image} alt="Post Image" className="w-full h-auto rounded-lg" />
        )}
      </div>
      <div className="mb-2">
        <span className="text-gray-600">Description: </span>
        <span className="font-bold">{post.description}</span>
      </div>
      <div className="mb-2">
        <span className="text-gray-600">❤️</span>
        <span className="font-bold">{post.likes}</span>
      </div>
      <div>
        <span className="text-gray-600">Comments: </span>
        <span className="font-bold">{post.comments}</span>
      </div>
    </div>
  );
};

export default Detail;
