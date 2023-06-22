import React from "react";
import { Link } from "react-router-dom";

const PostCommunity = ({ post }) => {

    return (
        <div className="bg-gray-100">
        <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
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

            <div className="flex justify-end">
                <div className="mr-4">
                    <span className="text-gray-600">❤️ </span>
                    <span className="font-bold"> {post.likes}</span>
                </div>
                <div>
                    <span className="text-gray-600"> ✉️ </span>
                    <span className="font-bold"> {post.comments} </span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PostCommunity;