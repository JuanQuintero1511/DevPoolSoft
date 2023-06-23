import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPostUser } from "../redux/actions";

import CloudinaryUploadWidget from "./Cloudinary/UploadWidget"


const CreatePostCommunity = ({ closeModal }) => {

  const [postData, setPostData] = useState({
    title: "",
    body: "",
    state: "In Progress",
    id_user_data: "2b325cb2-e8f7-4d74-a732-e2171b1f3245",
    image: {
      public_id: "olympic_flag",

      url: "",

    },
   
  });

  const handleImageUpload = (url) => {
    setPostData((prevPostData) => ({
      ...prevPostData,
      image: {
        ...prevPostData.image,
        url: url,
      },
    }));
  };
  
console.log(postData.image.url)
  const handleChange = (event) => {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setPostData({ ...postData, image: file });
  // };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validation()) {
      dispatch(createPostUser(postData));
      navigate("/community");
      window.location.reload("/community");
    } else {
      alert("Please fill in the required fields");
    }    
  };

  //*validaciones**//

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
    } else if (body.length > 300) {
      setErrors({ ...errors, body: "Maximum 300 characters." });
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
            Title:
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
            Description:
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


          <label htmlFor="image" className="">
            Image:
          </label>
          <div className="flex justify-center items-center">
            <div className="-my-[400px]">
           <CloudinaryUploadWidget onImageUpload={handleImageUpload} />
          </div>
          </div>

          <div className="flex justify-end">
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

export default CreatePostCommunity;

