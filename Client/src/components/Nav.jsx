import { useState, useEffect, useRef } from "react";
import { NavLink,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { SearchBar } from "./SearchBar";
import { SearchSuggestionsList } from "./SearchSuggestionsList";

const Nav = () => {

  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    };


    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSetSuggestions = (filteredSuggestions) => {
    setSuggestions(filteredSuggestions);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

//BOTON LOGOUT//

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const handlerLogout = () => {
  //   localStorage.removeItem('userName')

  //   // dispatch(logoutUser());

  //   navigate('/login');
  // }
  

  return (
    <>
      <nav className="navbar bg-dark border-bottom border-bottom-dark fixed-top" data-bs-theme="dark">
        <div className="container-fluid relative">
          <NavLink to="/home">
            <a className="navbar-brand text-white">DEVPOOL</a>
          </NavLink>
          <div className="d-flex flex-grow-2 w-50" ref={searchRef}>
            <SearchBar setSuggestions={handleSetSuggestions} />
          </div>
          <NavLink to="/profile">
            <button className="btn btn-outline-light">Perfil</button>
          </NavLink>
          <div ref={suggestionsRef}>
            <SearchSuggestionsList suggestions={suggestions}  />
          </div>
        

        {/* <form className="d-flex flex-grow-2 w-50" role="search">
          <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
        </form> */}

        <button type="button" className="btn btn-warning text-white">
          <i className="bi bi-patch-check mr-1"></i>
          Premium
        </button>

        {/* <Link to="/profile">
          <button className="btn btn-outline-light">Perfil</button>
        </Link> */}

      </div>
    </nav>
    </>
  );
};

export default Nav;
