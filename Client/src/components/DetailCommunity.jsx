import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, createCommentPost, deleteComment } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.idPost);
  const user = useSelector((state) => state.userLogin);
  const navigate = useNavigate();



  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (validateComment()) {
      await Swal.fire({
        icon: 'success',
        title: 'Post Successful!',
        text: 'Your comment has been posted.',
        confirmButtonColor: '#7FCEFF',
      });
      const newComment = {
        id_user_data: user?.user_datum?.id_user_data,
        id_post: post?.id_post,
        description: comment
      };
      dispatch(createCommentPost(newComment));
      setComment("");
      window.location.reload();
    }
  };
  

  const handleCommentDelete = (commentId) => {
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
        dispatch(deleteComment(commentId));
        window.location.reload();
      }
    });
  };

  const validateComment = () => {
    if (!user?.user_datum) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Comment',
        text: 'You need to register to be able to comment.',
        confirmButtonColor: '#7FCEFF',
      });
      return false;
    }
    

    if (comment.trim().length < 10) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Comment',
        text: 'The comment should have a minimum of 10 characters.',
        confirmButtonColor: '#7FCEFF',
      });
      return false;
    }
    return true;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center mt-10 mr-8">
        <div className="flex items-center justify-between w-full mb-2 mt-8">
          <h2 className="text-3xl font-bold text-teal-700 ml-[20vw]">COMMUNITY</h2>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 ml-[350px] mt-3 mr-4">
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
        {post.image &&
          <div className="mx-4 mt-4 mb-8">
            <div className="flex justify-center items-center">
              <img
                src={post.image?.url}
                alt="Post Image"
                className="max-w-[400px] max-h-[400px] object-cover"
              />
            </div>
          </div>
        }
        <div className="flex mb-4 items-center">
          <div className="ml-auto">
            <span>❤️ </span>
            <span className="font-bold"> {post.likes}</span>
          </div>
          <div className="ml-6">
            <span>✉️ </span>
            <span className="font-bold"> {post.comments?.length} </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 ml-[350px] mt-8 mr-4">
        <form className="flex flex-col" onSubmit={handleCommentSubmit}>
          <label className="mb-1 text-lg font-bold text-teal-700" htmlFor="description">
            ADD COMMENTS:
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="mb-2 p-2 border border-gray-400"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
          <button
            type="submit"
            className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            POST COMMENT
          </button>
        </form>
      </div>

      {post?.comments &&
        post.comments.map((com) => (
          <div key={com.id_comments} className="bg-white rounded-lg shadow-md p-4 ml-[350px] mt-1 mr-4">
            <div className="flex items-center">
              <span>🧑🏻‍💻 </span>
              <span className="font-bold">{com.user_datum?.full_name}</span>
              {(com.user_datum?.full_name === user.user_datum?.full_name || user.user_datum?.rol === "admin"  )&& (
                <button onClick={() => handleCommentDelete(com.id_comments)} title="Delete" className="ml-auto">
                  ❌
                </button>
              )}
            </div>
            <div className="mt-2">
              <h3>{com.description}</h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Detail;
