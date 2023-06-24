import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Nav = () => {

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

  return (
    <nav class="navbar bg-dark border-bottom border-bottom-dark fixed-top" data-bs-theme="dark">
      <div class="container-fluid">
  
        <a className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mr-4 mt-0 text-4xl font-extrabold">DEVPOOL</a>
        <form class="d-flex flex-grow-2 w-50" role="search">
          <input class="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
        </form>
        <Link to="/profile">
          <button class="btn btn-outline-light">Perfil</button>
        </Link>
      </div>
    </nav>


  );
};

export default Nav;

