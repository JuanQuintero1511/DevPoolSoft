import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentPost } from "../redux/actions";
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
  console.log(post)

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
      <div className="flex flex-col items-center mt-10 mr-8">
        <div className="flex items-center justify-between w-full mb-4 mt-8">
          <h2 className="text-3xl font-bold text-teal-700 ml-[20vw]">COMMUNITY</h2>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 ml-[350px] mt-3 mr-4">
        <div className="mb-4">
          <span>🧑🏻‍💻 </span>
          <span className="font-bold">{post?.user_datum?.full_name}</span>
        </div>
        <div className="mb-1">
          <h2 className="text-2xl font-bold underline text-blue-500">{post?.title}</h2>

        </div>
          <div className="flex items-center">
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

      <form onSubmit={handleSubmit} className="mt-4">
        <label htmlFor="description" className="block mb-2 text-teal-700 font-bold text-lg p-4 ml-[350px] mt-3 mr-4 ">
          COMMENTS
        </label>
        <input
          name="description"
          placeholder="Insert comment"
          className="bg-white rounded-lg shadow-md p-4 ml-[350px] mt-1 mr-4"
          value={postData.description}
          onChange={handleChange}
          onBlur={validateDescription}
          required
        />

        <button
          type="submit"
          className="select-none rounded-lg bg-teal-700 py-2 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-2"
        >
          <img src="data:image/png;base64,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"
            alt="Submit"
            className="h-4 w-4"
          />
        </button>
        {errors.description && <p className="text-red-500 text-sm p-4 ml-[350px] mt-1 mr-4">{errors.description}</p>}
      </form>

      {post?.comments &&
        post.comments.map((com) => (
          <div key={com.id_comments} className="bg-white rounded-lg shadow-md p-4 ml-[350px] mt-1 mr-4">
            <span>🧑🏻‍💻 </span>
            <span className="font-bold">{com.user_datum?.full_name}</span>
            <h3>{com.description}</h3>
          </div>
        ))}
    </div>
  );
};

export default CommentsCommunity;
