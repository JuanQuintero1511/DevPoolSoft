import { useParams, Link } from "react-router-dom";
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
        <div className="bg-white rounded-lg shadow-md p-4 ml-[350px] mt-14 mr-4">
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

            <div className="mb-4 border border-gray-300 p-2 rounded-lg">
                <span className="font-bold">{post.body}</span>
            </div>

            <div className="flex mb-4 items-center">
                <div className="mr-2">
                    <Link to={`/inprogress`}>
                        <button className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            VIEW ✉
                        </button>
                    </Link>  
                </div>
                <div>
                    <Link to={`/inprogress`}>  
                        <button className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            WRITE ✉
                        </button>
                    </Link>
                </div>
                
                <div className="ml-auto">
                    <span>❤ </span>
                    <span className="font-bold"> {post.likes}</span>
                </div>
                <div>
                    <span>✉ </span>
                    <span className="font-bold"> 0</span>
                </div>
            </div>
        </div>
    );
};

export default Detail;