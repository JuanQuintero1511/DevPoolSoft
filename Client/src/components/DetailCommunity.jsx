import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../redux/actions";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector((state) => state.idPost);

    useEffect(() => {
        dispatch(getPostById(id));
    }, [dispatch, id]);

    return (
        <div className="bg-white rounded-lg shadow-md p-4 ml-[250px] mt-4 mr-4">
            <div className="mb-4">
                <h2 className="text-2xl font-bold underline text-blue-500">{post.title}</h2>
            </div>
            <div className="mb-4">
                <span>🧑🏻‍💻 </span>
                <span className="font-bold"> {post.user_datum?.full_name}</span>
            </div>

            <div className="mb-4">
                <span>🕒 </span>
                <span className="font-bold"> {post.date_register?.substring(0, post.date_register.indexOf('T'))}</span>
            </div>

            <div className="mb-4">
                {post.image && (
                    <img src={post.image} alt="Post Image" className="w-full h-auto rounded-lg" />
                )}
            </div>
            <div className="mb-4 border border-gray-300 p-2 rounded-lg">
                <span className="font-bold">{post.body}</span>
            </div>
            <div className="flex mb-4 justify-end">
                <div className="mr-4">
                    <span className="text-gray-600">❤️ </span>
                    <span className="font-bold"> {post.likes}</span>
                </div>
                <div>
                    <span className="text-gray-600">📨 </span>
                    <span className="font-bold"> 0</span>
                </div>
            </div>
        </div>
    );
};

export default Detail;


