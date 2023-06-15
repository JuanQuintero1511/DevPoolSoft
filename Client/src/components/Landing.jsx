import { Link } from "react-router-dom"

export const Landing = () => {
  return (
<div className="flex flex-col md:flex-row h-screen items-center">
  <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <img src="src/image/fondo.jpg" alt="fondo" className="w-full h-full object-cover"/>
  </div>
  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
    <div className="w-full h-100">
      <h1 className="text-xl font-bold">The tranquility tohave everything yourworld developer inthe only place.</h1>
      <div className="mt-6 flex justify-center space-x-4">
        <button className="bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3">
          <Link to="/login">
            Login
          </Link>
        </button>
        <button className="bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
          <Link to="/signup">
            Sign Up
          </Link>
        </button>
      </div>
      <p className="mt-8">
        Need an account?
        <a href="/register" className="text-blue-500 hover:text-blue-700 font-semibold">
          Create an account
        </a>
      </p>
    </div>
  </div>
</div>
  )
}
