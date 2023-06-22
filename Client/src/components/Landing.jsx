import { Link } from "react-router-dom"

export const Landing = () => {

  const handleLogin = () => {
    // Redirigir al usuario a la página de inicio de sesión de Auth0
    window.location.href = 'URL_DE_INICIO_DE_SESION_DE_AUTH0';
  };
  
  return (
    <div className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-cover bg-center w-full h-screen" style={{ backgroundImage: "url('src/image/fondo.jpg')" }}>
        <div className="bg-white bg-opacity-75 w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Welcome to <span className="text-blue-500">DevPool</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-center mt-6">

            The tranquility of having everything in your world developed in one place.

 
            </h2>
            <div className="mt-8 flex justify-center space-x-4">
              <button className= "bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3" onClick={handleLogin}> Iniciar sesión
                {/* <Link to="/login">
                  Login
                </Link> */}
              </button>
              <button className="bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                <Link to="/register">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
