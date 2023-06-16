import { useState, useRef } from "react";
import leftside from "../image/leftside.jpg"
import {useDispatch} from "react-redux"
import devpoolicon from "../image/devpoolicon.png"
import { createCompany } from "../redux/actions";

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back ;(";
})
window.addEventListener("focus", () => {
  document.title = docTitle;
})

export const Register = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }



  const [rolSelected, setRolSelected] = useState({
    company: false,
    user: false,
  });
  const [error, setError] = useState({});

  const [users, setUsers] = useState({
    userName: "",
    email: "",
    password: "",
  })

  {
    // "full_name": "John Doe",
    // "backup_email": "john.doe@example.com",
    // "description": "Company description",
    // "date_birthday": "1990-01-01",
    // "address": "123 Main St, City",
    // "phone_number": "1234567890",
    // "profile_image": "https://example.com/profile.jpg",
    // "authentication": "https://example.com/authentication.pdf"
  }

  const [companyForm, setCompanyForm] = useState({

    rol_type: "",
    userName: "",
    password_company: "",
    full_name: "",
    adress: "",
    backup_email: users.email,
    date_birthday: "",
    phone_number: "",
    isActive: true,
    isPremium: false,
    authentication: "",


  })
  const [userForm, setUserForm] = useState({
    /*sacar id del resto del codigo para abajo desde aca*/
    rol_type: "",
    userName: "",
    password_user: "",
    full_name: "",
    backup_email: users.email,
    date_birthday: "",
    phone_number: "",
    isActive: true,
    isPremium: false,
    isAdmin: false,


  })

  const handleInputChange = event => {

    const { name, value } = event.target;
    if (rolSelected.company === true) {
      setCompanyForm(prevCompany => ({
        ...prevCompany,
        [name]: value
      }));
      setUsers(prevUser => ({
        ...prevUser,
        [name]: value
      }));
    } else {
      setUserForm(prevUser => ({
        ...prevUser,
        [name]: value
      }))
      setUsers(prevUser => ({
        ...prevUser,
        [name]: value
      }));
    }

  };


  

  const onValidate = (values) => {
    const errors = {};
    const noSymbols = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    const bestPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!values.userName && !values.userName && !values.full_name && !values.full_name && !values.password_company && !values.password_user && !values.email && !values.phone_number && !values.date_birthday && !values.date_birthday) {
      errors.username = "All camps are required"
    }

    if (values.full_name && noSymbols.test(values.full_name)) {
      errors.full_name = "Name can't contain symbols"
    }
    if (values.full_name && noSymbols.test(values.full_name)) {
      errors.full_name = "Name can't contain symbols"
    }
    if (values.password_company && !bestPassword.test(values.password_company)) {
      errors.password_company = "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number"
    }
    if (values.password_user && !bestPassword.test(values.password_user)) {
      errors.password_user = "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number"
    }
    return errors;

  };

  const test1 = {
    full_name: "Juan Meyer",
    backup_email: "try@example.com",
    description: "test1",
    date_birthday: "1990-02-03",
    address: "test1 agregar",
    phone_number: "12345129",
    profile_image: "https://example.com/profile.jpg",
    authentication: "CUIL"
  }
  console.log(test1)

  function handleSubmit(event) {
    event.preventDefault();
    let errors = {};
    if (!rolSelected.company) {
     
    } else {
      
    }
    if (errors && Object.keys(errors).length > 0) {
      setError(errors)
    } else {
      dispatch(createCompany(test1));
      alert("se ha creado con éxito")
      console.log(test1)
    }




  }



  return (
    <div style={{backgroundImage: `url(${leftside})`}} className="bg-cover">
  <div className="container w-[40%] bg-teal-300 bg-opacity-30 min-h-screen py-12 sm:px-6 lg:px-8 ml-5">
    
      <div className="w-full max-h-md space-y-10 bg-gray-200 p-1 shadow-sm">
      <h1 className="text-center text-bold font-serif text-5xl bg-blue-200 py-2">User Register:</h1>

        <div className="flex justify-center gap-5 ">
          <button
            className={`${rolSelected.user ? 'bg-blue-800 text-white' : 'bg-blue-200 text-gray-900'
              } inline-flex items-center px-4 py-2 rounded-md transition-colors duration-300 ease-in-out text-3xl`}
            onClick={() => {
              setRolSelected({ user: true, company: false });
              setUserForm({ rol_type: 2 });
            }}
          >
            DEVELOPER
          </button>
          <button
            className={`${rolSelected.company ? 'bg-blue-800 text-white' : 'bg-blue-200 text-gray-900'
              } inline-flex items-center px-4 py-2 rounded-md transition-colors duration-300 ease-in-out text-3xl`}
            onClick={() => {setRolSelected({ company: true, user: false })
            setUserForm({ rol_type: 3 });}
          }
          >
            COMPANY
          </button>
        </div>
        {rolSelected.company || rolSelected.user ? (
          <form className="p-2 font-serif text-xl">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                User Name:
                <input
                  type="text"
                  name={rolSelected.company ? 'userName' : 'userName'}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="User name here..."
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Password:
                <input
                  type="password"
                  name={rolSelected.company ? 'password_company' : 'password_user'}
                  placeholder="Password..."
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Confirm password:
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password..."
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                {rolSelected.company ? 'Company owner name:' : 'Full name of the user:'}
                <input
                  type="text"
                  name={rolSelected.company ? 'full_name' : 'full_name'}
                  placeholder={rolSelected.company ? 'Company owner full name...' : 'Full name of the user...'}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email:
                <input
                  type="text"
                  name="email"
                  placeholder="Email..."
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Phone Number:
                <input
                  type="number"
                  name="phone_number"
                  placeholder="Phone number..."
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
            {rolSelected.company && (
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Authentication archive:
                  <input
                    type="text"
                    name="authentication"
                    placeholder="Load authentication..."
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                {rolSelected.company ? 'Date of create:' : 'Date of birth:'}
                <input
                  type="text"
                  name={rolSelected.company ? 'date_birthday' : 'date_birthday'}
                  placeholder={rolSelected.company ? 'Date of create...' : 'Date of birth...'}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out text-3xl"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        ) : null}
        {Object.keys(error).length > 0 && (
          <div className="bg-red-100 text-red-900 p-4 mt-4 rounded">
            {Object.values(error).map((errorMsg, index) => (
              <p key={index}>{errorMsg}</p>
            ))}
          </div>
        )}
      </div>
  </div>
</div>

  );



}
