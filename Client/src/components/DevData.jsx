import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { devData } from "../redux/actions";
import CloudinaryUploadWidget from "./Cloudinary/UploadWidget";
import Swal from "sweetalert2";

const DevData = () => {
  const userLoged = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    aboutMe: "",
    id_user_data: "",
    experience: {
      puesto: "",
      duracion: "",
      empresa: ""
    },
    education: {
      titulo: "",
      institucion: "",
      año: ""
    },
    skills: [],
    ratings: "",
    curriculumVitae: {
      url: ""
    }
  });


  useEffect(() => {
    if (userLoged.user_datum) {
      setFormData((prevState) => ({
        ...prevState,
        id_user_data: userLoged.user_datum.id_user_data,
        aboutMe: userLoged.user_datum.description
      }));
    }
  }, [userLoged.user_datum]);

  const handleImageUpload = (url) => {
    setFormData((prevUser) => ({
      ...prevUser,
      curriculumVitae: {
        ...prevUser.curriculumVitae,
        url: url
      }
    }));
  };

  const handleSkillsChange = (event) => {
    const { value, checked } = event.target;

    setFormData((prevState) => {
      if (checked) {
        return {
          ...prevState,
          skills: [...prevState.skills, value],
        };
      } else {
        return {
          ...prevState,
          skills: prevState.skills.filter((skill) => skill !== value),
        };
      }
    });
  };

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    // Verificar si el nombre del campo tiene una sección
    if (name.includes(".")) {
      const [section, field] = name.split(".");
      setFormData((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [field]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(devData(formData));
    Swal.fire({
      icon: "success",
      title: "Profile completed",
      text: "The user info has been successfully updated!"
    });
    setFormData({
      id_user_data: "",
      experience: {
        puesto: "",
        duracion: "",
        empresa: ""
      },
      education: {
        titulo: "",
        institucion: "",
        año: ""
      },
      skills: [],
      ratings: "",
      curriculumVitae: {
        url: ""
      }
    });
  };

  return (
    <div className="container ml-[35%] mt-14 items-center">
      <h1 className="text-3xl font-bold mb-8">Work Experience.</h1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="puesto">
            Rol ocuped
          </label>
          <input
             type="text"
             id="puesto"
             name="experience.puesto"
             value={formData.experience.puesto}
             onChange={handleInputChange}
             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="duracion">
            Duration
          </label>
          <input
            type="text"
            id="duracion"
            name="experience.duracion"
            value={formData.experience.duracion}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="empresa">
            Business
          </label>
          <input
            type="text"
            id="empresa"
            name="experience.empresa"
            value={formData.experience.empresa}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Education.</h1>
          <label className="block mb-1" htmlFor="titulo">
            Title:
          </label>
          <input
            type="text"
            id="titulo"
            name="education.titulo"
            value={formData.education.titulo}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="institucion">
            Institution:
          </label>
          <input
            type="text"
            id="institucion"
            name="education.institucion"
            value={formData.education.institucion}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="año">
            Year:
          </label>
          <input
            type="number"
            id="año"
            name="education.año"
            value={formData.education.año}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="skills">
            Dev skills:
          </label>
          <div className="flex flex-wrap">
            <div className="mr-2">
              <input
                type="checkbox"
                id="javascript"
                name="javascript"
                value="JavaScript"
                checked={formData.skills.includes("JavaScript")}
                onChange={handleSkillsChange}
                className="mr-1"
              />
              <label htmlFor="javascript">JavaScript</label>
            </div>
            <div className="mr-2">
              <input
                type="checkbox"
                id="html"
                name="html"
                value="HTML"
                checked={formData.skills.includes("HTML")}
                onChange={handleSkillsChange}
                className="mr-1"
              />
              <label htmlFor="html">HTML</label>
            </div>
            <div className="mr-2">
              <input
                type="checkbox"
                id="css"
                name="css"
                value="CSS"
                checked={formData.skills.includes("CSS")}
                onChange={handleSkillsChange}
                className="mr-1"
              />
              <label htmlFor="css">CSS</label>
            </div>
            <div className="mr-2">
              <input
                type="checkbox"
                id="nodejs"
                name="nodejs"
                value="Node.js"
                checked={formData.skills.includes("Node.js")}
                onChange={handleSkillsChange}
                className="mr-1"
              />
              <label htmlFor="nodejs">Node.js</label>
            </div>
            <div className="mr-2">
              <input
                type="checkbox"
                id="react"
                name="react"
                value="React"
                checked={formData.skills.includes("React")}
                onChange={handleSkillsChange}
                className="mr-1"
              />
              <label htmlFor="react">React</label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="curriculumVitae">
            Curriculum Vitae:
          </label>
          {formData.curriculumVitae.url ? (
            <div className="flex items-center">
              <h4 className="text-green-500 mr-2 -my-[400px]">Uploaded ✅</h4>
              <button
                type="button"
                className="px-2 py-1 bg-red-500 text-white rounded"
                onClick={() =>
                  setFormData((prevState) => ({
                    ...prevState,
                    curriculumVitae: {
                      url: "",
                    },
                  }))
                }
              >
                Remove
              </button>
            </div>
          ) : (
            <div className="-my-[430px]">
              <CloudinaryUploadWidget onImageUpload={handleImageUpload} />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="ratings">
            Ratings
          </label>
          <input
            type="number"
            id="ratings"
            name="ratings"
            value={formData.ratings}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DevData;
