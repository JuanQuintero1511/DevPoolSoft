import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserData } from "../redux/actions";
import CloudinaryUploadWidget from "./Cloudinary/UploadWidget";
import Swal from 'sweetalert2';


const Test1 = () => {

  const dispatch = useDispatch();
  const userLoged = useSelector((state) => state.userLogin);
  console.log(userLoged)




  const [rolSelected, setRolSelected] = useState({
    company: false,
    user: false,
  });
  const [error, setError] = useState({});

  const [thisUser, setThisUser] = useState({
    userName: "",
    password: "",
    email: "",
  });



  const [form, setForm] = useState({
    userName: userLoged.userName,
    email: userLoged.email,
    password: userLoged.password,
    full_name: "",
    backup_email: "",
    description: "",
    date_birthday: "",
    address: "",
    phone_number: "",
    profile_image: '',
    authentication: "",
    rol_type: "",
    image: {
      url: ""
    }

  })

  //si es dev
console.log(form)

  const [formData, setFormData] = useState({
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
    ratings: ""
  });


  const handleImageUpload = (url) => {
    setForm((prevUser) => ({
      ...prevUser,
      image: {
        ...prevUser.image,
        url: url,
      },
    }));
  };

  const handleImageId = (public_id) => {
    setForm((prevUser) => ({
      ...prevUser,
      image: {
        ...prevUser.image,
        public_id: public_id
      },
    }));
  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    const parsedValue = name === "phone_number" ? parseInt(value) : value;

    setForm(prevUser => ({
      ...prevUser,
      [name]: parsedValue
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSkillsChange = (event) => {
    const selectedSkills = Array.from(event.target.selectedOptions, (option) => option.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      skills: selectedSkills
    }));
  };
  const onValidation = (values) => {
    const noSymbols = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


    let errors = {}
    if (!values.full_name && !values.backup_email && !values.description && !values.date_birthday && !values.address && !values.phone_number && !values.profile_image && !values.authentication && !values.image.url) {
      errors.userName = "All camps are required"
    }
    if (values.full_name.lenght > 30 && noSymbols.test(values.full_name)) {
      errors.full_name = "\nFull name must be less than or equal to 30 characters and can not contain symbols";
    }
    // if (values.backup_email && emailRegex.test(values.backup_email)) {
    //   errors.backup_email = `\nBackup Email is invalid`;
    // }
    return errors

  }

  function handleSubmit(event) {
    event.preventDefault();
    let errors = {};
    errors = onValidation(form)
    if (errors && Object.keys(errors).length > 0) {
      setError(errors)
    } else {

      dispatch(createUserData(form));
      Swal.fire({
        icon: 'success',
        title: 'Profile completed',
        text: 'The user info has been successfully updated!',
      });
      setForm({
        full_name: "",
        backup_email: "",
        description: "",
        date_birthday: "",
        address: "",
        phone_number: "",
        profile_image: '',
        authentication: "",
        rol_type: "",
        isPremium: "",
        image: {
          url: ""
        }

      })
      setTimeout(() => {
        window.location.reload();
      }, 2000);

    }

  }
console.log(form)

  return (
    <div className=" flex items-center justify-center min-h-screen" >
      <div className="w-full sm:w-[40%] bg-gray-100 mx-auto px-6 py-12 border-0 shadow-lg sm:rounded-3xl">
        <h1 className="flex justify-center mb-3 -mt-8 text-3xl font-extrabold text-gray-900 md:text-2xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mr-6 mt-0">DevPool </span>  Profile form required.</h1>

        {rolSelected.company || rolSelected.user ? null : <div className="flex justify-center space-x-4 h-12 mb-2">
          <a onClick={() => {
            setRolSelected({ user: true, company: false });
            setForm({ ...form, rol_type: "developer", isPremium: true, authentication: "CUIT" });
          }} className="relative inline-flex items-center justify-center px-9 py-3 overflow-hidden font-mono font-medium tracking-normal text-white bg-gray-800 rounded-lg group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-teal-200"></span>
            <span className="relative">DEVELOPER</span>
          </a>
          <a
            onClick={() => {
              setRolSelected({ company: true, user: false });
              setForm({ ...form, rol_type: "company" });

            }}
            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-widest text-white bg-gray-800 rounded-lg group focus:bg-teal-200 focus:outline-none"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-teal-200"></span>
            <span className="relative">COMPANY</span>
          </a>


        </div>}

        {rolSelected.company || rolSelected.user ? (
          <form  >
            <div >
              <div className="relative mb-2">
                <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-blue-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                  name='full_name'
                  onChange={handleInputChange}
                  value={form.full_name}
                  required />
                <label for="floating_outlined" className="absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"
                >
                  User Full Name:
                </label>
              </div>

            </div>








            <div className="relative mb-2">
              <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                name="backup_email"
                value={form.backup_email}
                onChange={handleInputChange}
                required

              />
              <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"

              >
                Back up email :
              </label>
            </div>


            <div className="relative mb-2">
              <input id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " type="number"
                name="phone_number"
                value={form.phone_number}
                onChange={handleInputChange}
                required />
              <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"
              >
                Phone Number:
              </label>
            </div>

            {rolSelected.company && (
              <div className="relative mb-2">
                <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="authentication"
                  onChange={handleInputChange}
                  value={form.authentication}
                  required />
                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"

                >
                  Authentication archive:
                </label>
              </div>)}


            <div className="relative mb-2">
              <input id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " type="text"
                name='date_birthday'
                value={form.date_birthday}
                onChange={handleInputChange}
                required />
              <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"
              >
                {'Date of birth:'}
              </label>
            </div>
            <div className="relative mb-2">
              <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="address"
                onChange={handleInputChange}
                value={form.address}

                required />
              <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"

              >
                Address:
              </label>
            </div>


            <div >
              <div className="relative mb-2">
                <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-blue-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                  name='profile_image'
                  onChange={handleInputChange}
                  value={form.profile_image}
                  required />
                <label for="floating_outlined" className="absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"
                >
                  Image title:
                </label>
              </div>
              <div className="relative mb-2">
              <label
                className="flex flex-col font-mono tracking-widest">
                <textarea name="description" value={form.description}
                  onChange={handleInputChange}
                  placeholder="Description about you..."
                  className="bg-black-300 py-3 px-6 placeholder:text-secondary text-black rounded-lg font-medium" />
              </label>
            </div>
              <div className="flex justify-center items-center">
                {form.image.url ?
                  <div className="-my-[400px]">
                    <h4>Uploaded ✅</h4>
                  </div> :

                  <div className="-my-[430px]">
                    <CloudinaryUploadWidget onImageUpload={handleImageUpload} handleImageId={handleImageId} />
                  </div>}
              </div>
            </div>
            {Object.keys(error).length > 0 && (
              <div className="bg-red-100 text-red-900 p-4 -mb-2 rounded">
                {Object.values(error).map((errorMsg, index) => (
                  <p key={index}>{errorMsg}</p>
                ))}
              </div>
            )}

            {/* {form.rol_type === "userDev" && (<div>

            <div className="relative mb-2">
              <label
                className="flex flex-col font-mono tracking-widest">
                <textarea name="description" value={form.description}
                  onChange={handleInputChange}
                  placeholder="Description about you..."
                  className="bg-black-300 py-3 px-6 placeholder:text-secondary text-black rounded-lg font-medium" />
              </label>
            </div>
            <div className="mb-4">
          <label className="block mb-1" htmlFor="puesto">Puesto</label>
          <input
            type="text"
            id="puesto"
            name="experience.puesto"
            value={formData.experience.puesto}
            onChange={handleInputChange}
            className="w-full px-2 py-1 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="duracion">Duración</label>
          <input
            type="text"
            id="duracion"
            name="experience.duracion"
            value={formData.experience.duracion}
            onChange={handleInputChange}
            className="w-full px-2 py-1 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="empresa">Empresa</label>
          <input
            type="text"
            id="empresa"
            name="experience.empresa"
            value={formData.experience.empresa}
            onChange={handleInputChange}
            className="w-full px-2 py-1 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            name="education.titulo"
            value={formData.education.titulo}
            onChange={handleInputChange}
            className="w-full px-2 py-1 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="institucion">Institución</label>
          <input
            type="text"
            id="institucion"
            name="education.institucion"
            value={formData.education.institucion}
            onChange={handleInputChange}
            className="w-full px-2 py-1 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="año">Año</label>
          <input
            type="number"
            id="año"
            name="education.año"
            value={formData.education.año}
            onChange={handleInputChange}
            className="w-full px-2 py-1 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="skills">Habilidades</label>
          <select
            id="skills"
            name="skills"
            multiple
            value={formData.skills}
            onChange={handleSkillsChange}
            className="w-full px-2 py-1 border rounded"
          >
            <option value="JavaScript">JavaScript</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Node.js">Node.js</option>
            <option value="React">React</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="ratings">Ratings</label>
          <input
            type="number"
            id="ratings"
            name="ratings"
            value={formData.ratings}
            onChange={handleInputChange}
            className="w-full px-2 py-1 border rounded"
          />
        </div>
        </div>)} */}



            <div className="flex items-center justify-center my-2 h-4">
              <a onClick={handleSubmit}
                className="relative inline-flex items-center justify-center px-9 py-3 overflow-hidden font-mono font-medium tracking-widest text-white bg-gray-800 rounded-lg group mx-4 mt-14">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-teal-300"></span>
                <span className="relative">SUBMIT</span>
              </a>
            </div>
          </form>
        ) : null}

      </div>

    </div>
  )
}

export default Test1;