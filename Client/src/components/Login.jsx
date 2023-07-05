import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAllUsers } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions";
import Swal from 'sweetalert2';
import LoginButton from "./Google.Login"

export const Login = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const handleLogin = () => {
    // Redirigir al usuario a la página de inicio de sesión de GOOGLE
    window.location.href = 'http://localhost:3001/auth';
  };

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    username: ""
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const user = users.find((user) => user.email === userData.email);

  
    if (user && user.password === userData.password && user.userName === userData.username && user.user_datum && user.user_datum.isActive === false) {
      Swal.fire({
        icon: 'error',
        title: 'Login incomplete!',
        text: 'Your account is disabled',
        confirmButtonColor: '#ff7f7f',
      });
    } else if (user && user.password === userData.password && user.userName === userData.username) {

      dispatch(userLogin(user));
      
      navigate("/home");
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login incomplete!',
        text: 'Invalid username, email, or password..',
        confirmButtonColor: '#ff7f7f',
      });
    }
  };
  
  


  //*validaciones*//

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    username: ""
  });

  const validateEmail = () => {
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email) ||
      userData.email === "" ||
      userData.email.length > 35
    ) {
      setErrors({
        ...errors,
        email: "Please enter a valid email address",
      });
    } else {
      setErrors({
        ...errors,
        email: "",
      });
    }
  };

  const validatePassword = () => {
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/.test(userData.password) ||
      userData.password === ""
    ) {
      setErrors({
        ...errors,
        password:
          "Password must be alphanumeric and have a length between 6 and 12 characters",
      });
    } else {
      setErrors({
        ...errors,
        password: "",
      });
    }
  };

  const validateUsername = () => {
    if (userData.username.length < 3 || userData.username.length > 10
    ) {
      setErrors({
        ...errors,
        username: "have a length between 3 and 10 characters",
      });
    } else {
      setErrors({
        ...errors,
        username: "",
      });
    }
  };

  //   let validation = () => {
  //     if (errors.email === "" && errors.password === "" && errors.username === "") {
  //       return true
  //     }
  //     return false
  //   }

  //   if (validation()) {
  //     dispatch(createUser(userData));
  //     navigate("/home");
  //     window.location.reload("/home");
  //   } else {
  //     alert("Please fill in the required fields");
  //   }    
  // };



  return (
    <div>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="src/image/dev.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-blue-500 text-2xl md:text-4xl font-bold">
              DevPool
            </h1>
          
            <form
              onSubmit={handleSubmit}
              className="mt-6"
              action="#"
              method="POST"
            >
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  onBlur={validateUsername}
                  placeholder="Enter username"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete="username"
                  required
                />

                {errors.username && (
                  <p className="text-red-500">{errors.username}</p>
                )}
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  onBlur={validateEmail}
                  placeholder="Enter email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete="email"
                  required
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  onBlur={validatePassword}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  minLength="6"
                  maxLength="12"
                  autoComplete="current-password"
                  required
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                disabled={
                  !userData.email ||
                  !userData.password ||
                  errors.email ||
                  errors.password
                }
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 mb-2"
              >
                Log In
              </button>
            </form>

          

            <LoginButton/>
                    

            <p className="mt-2">
              Need an account?{' '}
              <Link to="/register" className="text-blue-500 hover:text-blue-700 font-semibold">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};