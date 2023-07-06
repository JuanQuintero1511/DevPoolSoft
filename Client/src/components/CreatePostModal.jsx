import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createPostUser } from "../redux/actions";
import CloudinaryUploadWidget from "./Cloudinary/UploadWidget";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreatePostModal = ({ addPost, closeModal }) => {

  const user = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    id_user_data: user.user_datum.id_user_data,
    title: "",
    body: "",
    image: user.user_datum.image.url,
    interviewerName: "",
    interviewerImage:{
      url:"",
    },
    resume:"",
    typePost: "Job",
  });



  const handleImageUpload = (url) => {
    setPostData((prevPostData) => ({
      ...prevPostData,
      interviewerImage: {
        ...prevPostData.image,
        url: url,
      },
    }));
  };

  const handleChange = (event) => {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validation()) {
      dispatch(createPostUser(postData));
      closeModal();

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'All fields required',
        text: 'Please complete all required fields before creating a post.',
      });      
    }
  };

//validation
const [errors, setErrors] = useState({
  title: "",
  body: "",
});

const validateTitle = () => {
  const { title } = postData;
  if (title.length < 3) {
    setErrors({ ...errors, title: "Requires a minimum of 3 characters." });
  } else if (title.length > 50) {
    setErrors({ ...errors, title: "Maximum 50 characters." });
  } else {
    setErrors({ ...errors, title: "" });
  }
};

const validateBody = () => {
  const { body } = postData;
  if (body.length < 10) {
    setErrors({ ...errors, body: "Requires a minimum of 10 characters." });
  } else if (body.length > 500) {
    setErrors({ ...errors, body: "Maximum 500 characters." });
  } else {
    setErrors({ ...errors, body: "" });
  }
};

let validation = () => {
  if (errors.title === "" && errors.body === "") {
    return true
  }
  return false
}

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
    <div className="bg-white rounded-lg p-6">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        onClick={() => closeModal()}
      >
        &times;
      </button>

      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-2">CREATE A NEW POST</h2>
        <button
          type="button"
          onClick={closeModal}
          className="select-none rounded-lg bg-red-600 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-[2rem] h-[2rem]"
        >
          X
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="block mb-2">
          Title: <span className="text-red-500 text-sm">*</span>
        </label>
        <input
          type="text"
          name="title"
          placeholder="Insert title"
          className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
          value={postData.title}
          onChange={handleChange}
          onBlur={validateTitle}
          required
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        <label htmlFor="body" className="block mb-2">
          Little resume: 
        </label>
        <textarea
          name="resume"
          placeholder="Insert description"
          className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
          value={postData.resume}
          onChange={handleChange}
          onBlur={validateBody}
          required
        ></textarea>
        <label htmlFor="body" className="block mb-2">
          Description: <span className="text-red-500 text-sm">*</span>
        </label>
        <textarea
          name="body"
          placeholder="Insert description"
          className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
          value={postData.body}
          onChange={handleChange}
          onBlur={validateBody}
          required
        ></textarea>
        {errors.body && <p className="text-red-500 text-sm">{errors.body}</p>}

        <label htmlFor="title" className="block mb-2">
          Interviewer Name:
        </label>
        <input
          type="text"
          name="interviewerName"
          placeholder="Insert title"
          className="border border-gray-300 px-3 py-2 rounded-md w-full mb-2"
          value={postData.interviewerName}
          onChange={handleChange}
          onBlur={validateTitle}
          required
        />
        <label htmlFor="image" className="">
          Interviewer Image:
        </label>
        <div className="flex justify-center items-center">
          {postData.interviewerImage.url ?
            <div className="-my-[400px]">
              <h4>Uploaded ✅</h4>
            </div> :
            <div className="-my-[400px]">
              <CloudinaryUploadWidget onImageUpload={handleImageUpload} />
            </div>
          }
        </div>
        <div className="flex justify-end mt-10">
          <button
            type="submit"
            className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            CREATE POST
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default CreatePostModal;
