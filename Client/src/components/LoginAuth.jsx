import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const LoginAuth0 = (props) => {

  const users = [
    { email: "henry@hotmail.com", password: "AsD@$18628!" },
    { email: "devpool@hotmail.com", password: "AsD@$18628!" }
  ];

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleChangePassword = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const [errors, setErrors] = useState({
    email: "",
    password: "",
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
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/.test(userData.password) ||
      userData.password === ""
    ) {
      setErrors({
        ...errors,
        password:
          "Password must be alphanumeric and have a length between 6 and 10 characters",
      });
    } else {
      setErrors({
        ...errors,
        password: "",
      });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find((user) => user.email === userData.email);

    if (user && user.password === userData.password) {
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

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

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-blue-500 text-2xl md:text-4xl font-bold">
              DevPool
            </h1>
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <form
              onSubmit={handleSubmit}
              className="mt-6"
              action="#"
              method="POST"
            >
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChangeEmail}
                  onBlur={validateEmail}
                  placeholder="Enter Email Address"
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
                  onChange={handleChangePassword}
                  onBlur={validatePassword}
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  minLength="6"
                  maxLength="10"
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
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-6 h-6"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <path
                      id="a"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </defs>
                  <clipPath id="b">
                    <use xlinkHref="#a" overflow="visible" />
                  </clipPath>
                  <path
                    clipPath="url(#b)"
                    fill="#FBBC05"
                    d="M0 37V11l17 13z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  />
                </svg>
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>

            <p className="mt-8">
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
