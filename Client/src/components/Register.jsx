import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/actions";
import Swal from "sweetalert2";
import { userLogin } from "../redux/actions";
import { useNavigate } from "react-router-dom";

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back ;(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usersState = useSelector((state) => state.allUsers);

  const [error, setError] = useState({});
  const [users, setUsers] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState({
    password2: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsers((prevUsers) => ({
      ...prevUsers,
      [name]: value,
    }));

    setConfirmPassword(prevPass => ({
      ...prevPass,
      [name]: value
    }))



  };

  const onValidate = (values) => {
    const errors = {};
    const bestPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!values.userName.trim()) {
      errors.userName = "Username is required";
    } else if (
      usersState.some((user) => user.userName === values.userName.trim())
    ) {
      errors.userName = "Username already exists";
    }

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email.toLowerCase())) {
      errors.email = "Invalid email address";
    } else if (
      usersState.some(
        (user) => user.email === values.email.trim().toLowerCase()
      )
    ) {
      errors.email = "Email already exists";
    }

    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else if (!bestPassword.test(values.password)) {
      errors.password =
        "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number";
    }

    if(values.password !== confirmPassword.password2){
      errors.password = "Passwords must be equals"
    }
  
    return errors;
  };

  function handleSubmit(event) {
    event.preventDefault();

    let errors = {};

    errors = onValidate(users);
    if (errors && Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      dispatch(createUser(users));

      Swal.fire({
        icon: "success",
        title: "User Created",
        text: "The user has been successfully created!",
      });

      dispatch(userLogin(users));
      navigate("/home");

      setUsers({
        userName: "",
        email: "",
        password: "",
      });
      setConfirmPassword({
        password2: "",
      });
    }
  }

  return (
    <div className="bg-[url('./src/image/leftside.jpg')] flex items-center justify-center min-h-screen">
      <div className="w-full sm:w-[40%] bg-gray-100 mx-auto px-6 py-12 border-0 shadow-lg sm:rounded-3xl">
        <h1 className="flex justify-center mb-3 -mt-8 text-3xl font-extrabold text-gray-900 md:text-2xl lg:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mr-4 mt-0">
            DevPool
          </span>{" "}
          Register Form.
        </h1>
        <form>
          <div>
            <div className="relative mb-2">
              <input
                type="text"
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-blue-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                name="userName"
                onChange={handleInputChange}
                value={users.userName}
                required
              />
              <label
                htmlFor="floating_outlined"
                className="absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"
              >
                User Name:
              </label>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <div className="relative mb-2">
                <input
                  type="password"

                  id="floating_outlined2"
                  className="block px-2.5 pb-2.5 pt-4 w-full sm:w-[215%] text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                  placeholder=" "
                  name="password"
                  onChange={handleInputChange}
                  value={users.password}
                  required
                />
                <label
                  htmlFor="floating_outlined1"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"
                >
                  Password:
                </label>
                {error.userName && (
                  <p className="text-red-500">{error.userName}</p>
                )}
              </div>
            </div>
            <div className="w-full sm:w-1/2 px-2">
              <div className="relative mb-2">
                <div className="w-full sm:w-1/2 px-2">
                  <input
                    type="password"
                    id="floating_outlined2"
                    className="block px-2.5 pb-2.5 pt-4 w-full sm:w-[405%] text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    name="password2"
                    value={confirmPassword.password2}
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    htmlFor="floating_outlined2"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest ml-2"
                    type="password"
                  >
                    Confirm Password:
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mb-2">
            <input
              type="text"
              id="floating_outlined3"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              name="email"
              value={users.email}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="floating_outlined3"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"
            >
              Email:
            </label>
          </div>

          {Object.keys(error).length > 0 && (
            <div className="bg-red-100 text-red-900 p-4 -mb-2 rounded">
              {Object.values(error).map((errorMsg, index) => (
                <p key={index}>{errorMsg}</p>
              ))}
            </div>
          )}

          <div className="flex items-center justify-center my-2 h-4">
            <a
              onClick={handleSubmit}
              className="relative inline-flex items-center justify-center px-9 py-3 overflow-hidden font-mono font-medium tracking-widest text-white bg-gray-800 rounded-lg group mx-4 mt-14"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-teal-300"></span>
              <span className="relative">SUBMIT</span>
            </a>

            <a
              href="/"
              className="relative inline-flex items-center justify-center px-9 py-3 overflow-hidden font-mono font-medium tracking-widest text-white bg-gray-800 rounded-lg group mx-4 mt-14"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-teal-300"></span>
              <span className="relative">BACK</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
