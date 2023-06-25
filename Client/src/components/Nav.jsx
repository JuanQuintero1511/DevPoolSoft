import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { SearchBar } from "./SearchBar";
import { SearchSuggestionsList } from "./SearchSuggestionsList";

const Nav = () => {

  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);

  const closeSuggestions = () => {
    setSuggestions([]);
  };

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

  return (
    <>
      <nav className="navbar bg-dark border-bottom border-bottom-dark fixed-top" data-bs-theme="dark">
        <div className="container-fluid relative">
          <NavLink to="/home">
          <h3 className="flex justify-center mb-3 -mt-8 text-3xl font-extrabold text-gray-900 md:text-2xl lg:text-4xl lg:mt-0.5 py-0"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mr-4 mt-0">DevPool </span></h3>
          </NavLink>
          <div className="d-flex flex-grow-2 w-50" ref={searchRef}>
            <SearchBar setSuggestions={handleSetSuggestions} />
          </div>
          <NavLink to="/profile">
            <button className="btn btn-outline-light">Perfil</button>
          </NavLink>
          <div ref={suggestionsRef}>
            <SearchSuggestionsList suggestions={suggestions}  closeSuggestions={closeSuggestions}/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

