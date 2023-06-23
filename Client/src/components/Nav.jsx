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
            <a className="navbar-brand text-white">DEVPOOL</a>
          </NavLink>
          <div className="d-flex flex-grow-2 w-50" ref={searchRef}>
            <SearchBar setSuggestions={handleSetSuggestions} />
          </div>
          <NavLink to="/profile">
            <button className="btn btn-outline-light">Perfil</button>
          </NavLink>
          <div ref={suggestionsRef}>
            <SearchSuggestionsList suggestions={suggestions} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
