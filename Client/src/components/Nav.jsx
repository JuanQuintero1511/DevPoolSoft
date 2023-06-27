import { Link,useLocation  } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Nav = () => {
  const location = useLocation();
  // const [suggestions, setSuggestions] = useState([]);
  // const searchRef = useRef(null);
  // const suggestionsRef = useRef(null);

  // const closeSuggestions = () => {
  //   setSuggestions([]);
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       searchRef.current &&
  //       !searchRef.current.contains(event.target) &&
  //       suggestionsRef.current &&
  //       !suggestionsRef.current.contains(event.target)
  //     ) {
  //       setSuggestions([]);
  //     }
  //   };


  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  // const handleSetSuggestions = (filteredSuggestions) => {
  //   setSuggestions(filteredSuggestions);
  // };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <nav className="navbar bg-dark border-bottom border-bottom-dark fixed-top" data-bs-theme="dark">
      <div className="container-fluid">

        <a className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mr-4 mt-0 text-4xl font-extrabold">DEVPOOL</a>

        {location.pathname === '/JobsOffers' && (
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle bg-gradient-to-r from-indigo-500 via-emerald-500 to-indigo-500" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Tipo De Empleo
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item active" href="#" onClick={() => handleTypeChange('On-Site')}>On-Site</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleTypeChange('Remote')}>Remote</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleTypeChange('Full-Time')}>Full-Time</a></li>
            </ul>
          </div>
        )}

        {location.pathname === '/JobsOffers' && (
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle bg-gradient-to-r from-indigo-500 via-emerald-500 to-indigo-500" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cargo
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item active" href="#">Full-Stack</a></li>
              <li><a className="dropdown-item" href="#">Front-End</a></li>
              <li><a className="dropdown-item" href="#">Back-End</a></li>
              <li><a className="dropdown-item" href="#">Mobile App</a></li>
              <li><a className="dropdown-item" href="#">Software Engineer</a></li>
              <li><a className="dropdown-item" href="#">Data Scientist</a></li>
              <li><a className="dropdown-item" href="#">DevOps Engineer</a></li>
            </ul>
          </div>
        )}

        <form className="d-flex flex-grow-2 w-50" role="search">
          <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
        </form>

        <button type="button" className="btn btn-warning text-white">
          <i className="bi bi-patch-check mr-1"></i>
          Premium
        </button>

        <Link to="/profile">
          <button className="btn btn-outline-light">Perfil</button>
        </Link>

      </div>
    </nav>
  );
};

export default Nav;

