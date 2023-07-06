import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentPost, deleteComment } from "../redux/actions";
import { getPostById } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';




const CommentsCommunity = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.idPost);
  const user = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);


  const [postData, setPostData] = useState({
    id_user_data: user?.user_datum?.id_user_data,
    id_post: post?.id_post,
    description: ""
  });


  const handleChange = (event) => {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    if (validation()) {
      Swal.fire({
        icon: 'success',
        title: 'Post Successful!',
        text: 'Your comment has been posted.',
        confirmButtonColor: '#7FCEFF',
      });
      dispatch(createCommentPost(postData));
      navigate(`/community/${id}`);
    }
  };

  const handleDelete = (id) => {
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
        dispatch(deleteComment(id));
        window.location.reload();
      }
    });
  };


  //* Validations *//

  const [errors, setErrors] = useState({
    description: "",
  });

  const validateDescription = () => {
    const { description } = postData;
    if (description.length < 10) {
      setErrors({ ...errors, description: "Requires a minimum of 10 characters." });
    } else if (description.length > 200) {
      setErrors({ ...errors, description: "Maximum 200 characters." });
    } else {
      setErrors({ ...errors, description: "" });
    }
  };

  let validation = () => {
    if (errors.description === "") {
      return true;
    }
    return false;
  };

  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white rounded-lg shadow-md p-4 ml-[350px] mt-8 mr-4">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="mb-1 text-lg font-bold" htmlFor="description">
            Add a comment:
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className={`mb-2 p-2 border ${
              errors.description ? "border-red-500" : "border-gray-400"
            }`}
            value={postData.description}
            onChange={handleChange}
            onBlur={validateDescription}
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description}</p>
          )}
          <button
            type="submit"
            className="self-end py-2 px-4 mt-2 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
          >
            Post Comment
          </button>
        </form>
      </div>

      {post?.comments &&
        post.comments.map((com) => (
          <div key={com.id_comments} className="bg-white rounded-lg shadow-md p-4 ml-[350px] mt-1 mr-4">
            <div className="flex items-center">
              <span>🧑🏻‍💻 </span>
              <span className="font-bold">{com.user_datum?.full_name}</span>
              {com.user_datum?.full_name === user.user_datum?.full_name && (
                <button onClick={() => handleDelete(com.id_comments)} title="Delete" className="ml-auto">
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

export default CommentsCommunity;
