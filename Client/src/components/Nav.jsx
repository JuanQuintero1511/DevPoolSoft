import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { SearchBar } from "./SearchBar";
import { SearchSuggestionsList } from "./SearchSuggestionsList";
import { filtrarCargo, filtrarTipoEmpleo, logoutUser, resetPosts} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import MercadoPagoModal from "./MercadoPago/MercadoPagoModal";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { IconButton } from "@mui/material";
import Dashboard from "./Dashboard/Dashboard";
import { DashboardCustomize } from "@mui/icons-material";

const Nav = () => {
  const user = useSelector((state) => state.userLogin);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);
  const location = useLocation();
  const allPosts = useSelector((state) => state.allPosts);
  const originalPosts = useSelector((state) => state.originalPosts);


  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

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

  //BOTON LOGOUT//


  const firebaseConfig = {
    apiKey: "AIzaSyCwCe7BBMtInaRu422Myrvg5d-qO-LAtHc",
    authDomain: "devpoolsoft.firebaseapp.com",
    projectId: "devpoolsoft",
    storageBucket: "devpoolsoft.appspot.com",
    messagingSenderId: "759683741972",
    appId: "1:759683741972:web:bc2b1d5c9746d5c728aa01",
    measurementId: "G-2549PBCD08"
  };

  const app = initializeApp(firebaseConfig);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLogout = () => {
    localStorage.removeItem("userName");
    dispatch(logoutUser());
    const auth = getAuth();

  

    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        send(error);
      });

    navigate("/login");
  };

  const handleEmpleoFilter = (e) => {
    e.preventDefault();
    dispatch(filtrarTipoEmpleo(e.target.value));
  };

  const handleCargoFilter = (e) => {
    e.preventDefault();
    dispatch(filtrarCargo(e.target.value));
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(resetPosts());
  };



  return (
    <>
       <nav
        className="navbar bg-dark border-bottom border-bottom-dark fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid relative">
          <NavLink to="/home">
            <a className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mr-4 mt-0 text-4xl font-extrabold">
              DEVPOOL
            </a>
          </NavLink>
          {location.pathname === "/JobsOffers" && (
            <div className="dropdown">
              <select
                className="form-select text-white py-2 px-4 rounded-md bg-clip-padding"
                onChange={handleEmpleoFilter}
              >

                <option disabled value="">
                  Tipo de Empleo
                </option>
                <option value="On-Site">On-Site</option>
                <option value="Remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
              </select>
            </div>
          )}

          {location.pathname === "/JobsOffers" && (
            <div className="dropdown">
              <select
                className="form-select text-white py-2 px-4 rounded-md bg-clip-padding"
                onChange={handleCargoFilter}
              >
                <option disabled value="">
                  Cargo
                </option>
                <option value="Full-Stack">Full-Stack</option>
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
              </select>
            </div>
          )}
          {location.pathname === "/JobsOffers" && (
            <button
              onClick={handleReset}
              type="button"
              className="btn btn-danger text-white"
            >
              Reset
            </button>
          )}
          <div className="d-flex flex-grow-2 w-50" ref={searchRef}>
            <SearchBar setSuggestions={handleSetSuggestions} />
          </div>
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="btn btn-warning text-white"
          >
            <i className="bi bi-patch-check mr-1"></i>
            Premium
          </button>
          {showModal && <MercadoPagoModal closemodal={closeModal} />}
          <NavLink to="/profile">
            <button className="btn btn-outline-light">
              <i className="bi bi-person-circle"></i>
            </button>
          </NavLink>
          
          {user?.user_datum?.rol === "admin" &&
          <IconButton color="primary" onClick={() => navigate ('dashboard')} aria-label="Dashboard"  >
            <DashboardCustomize />
          </IconButton>
          }

          <button
            type="button"
            onClick={handlerLogout}
            className="btn btn-danger text-white"
          >
            <i className="bi bi-box-arrow-right"></i>
          </button>

          <div ref={suggestionsRef}>
            <SearchSuggestionsList
              suggestions={suggestions}
              closeSuggestions={closeSuggestions}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;