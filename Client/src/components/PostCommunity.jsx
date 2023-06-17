import React from "react";

const PostCommunity = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-2">
        <span className="text-gray-600">User: </span>
        <span className="font-bold">{post.id_post}</span>
      </div>
      <div className="mb-2">
        <span className="text-gray-600">Title: </span>
        <span className="font-bold">{post.id_post}</span>
      </div>
      <div className="mb-4">
        {post.image && (
          <img src={post.image} alt="Post Image" className="w-full h-auto rounded-lg" />
        )}
      </div>
      <div>
        <span className="text-blue-500 hover:text-blue-700 font-semibold">
          Read More
        </span>
      </div>
    </div>
  );
};

export default PostCommunity;
