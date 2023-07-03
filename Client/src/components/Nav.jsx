import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { SearchBar } from "./SearchBar";
import { SearchSuggestionsList } from "./SearchSuggestionsList";
import { logoutUser } from "../redux/actions";
import { useDispatch } from "react-redux";
import MercadoPagoModal from "./MercadoPago/MercadoPagoModal"
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";


const Nav = () => {
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);
  const location = useLocation();

  const [selectedTipoEmpleo, setSelectedTipoEmpleo] = useState("");
  const [selectedCargo, setSelectedCargo] = useState("");

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
    localStorage.removeItem('userName')
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

  const handleTipoEmpleoChange = (tipoEmpleo) => {
    if (selectedCargo.includes(tipoEmpleo)) {
      // El tipo de empleo ya está seleccionado, lo removemos del estado
      setSelectedTipoEmpleo((prevState) =>
        prevState.filter((item) => item !== tipoEmpleo)
      );
    } else {
      // El tipo de empleo no está seleccionado, lo agregamos al estado
      setSelectedTipoEmpleo((prevState) => [...prevState, tipoEmpleo]);
    }
  };
  console.log(selectedCargo);

  const handleCargo = (cargo) => {
    if (selectedTipoEmpleo.includes(cargo)) {
      // El tipo de empleo ya está seleccionado, lo removemos del estado
      setSelectedCargo((prevState) =>
        prevState.filter((item) => item !== cargo)
      );
    } else {
      // El tipo de empleo no está seleccionado, lo agregamos al estado
      setSelectedCargo((prevState) => [...prevState, cargo]);
    }
  };
  console.log(selectedTipoEmpleo);
  //   const [suggestions, setSuggestions] = useState([]);
  //   const searchRef = useRef(null);
  //   const suggestionsRef = useRef(null);
  //   const location = useLocation();

  //   const [showModal, setShowModal] = useState(false);

  //    const closeModal = () => {
  //      setShowModal(false);
  //    };
  //   const closeSuggestions = () => {
  //     setSuggestions([]);
  //   };

  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (
  //         searchRef.current &&
  //         !searchRef.current.contains(event.target) &&
  //         suggestionsRef.current &&
  //         !suggestionsRef.current.contains(event.target)
  //       ) {
  //         setSuggestions([]);
  //       }
  //     };

  //     document.addEventListener("click", handleClickOutside);

  //     return () => {
  //       document.removeEventListener("click", handleClickOutside);
  //     };
  //   }, []);

  //   const handleSetSuggestions = (filteredSuggestions) => {
  //     setSuggestions(filteredSuggestions);
  //   };

  // //BOTON LOGOUT//

  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   const handlerLogout = () => {
  //     localStorage.removeItem('userName')

  //     dispatch(logoutUser());

  //     navigate('/login');
  //   }

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
              <button
                className="btn btn-secondary dropdown-toggle bg-gradient-to-r from-indigo-500 via-emerald-500 to-indigo-500"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tipo De Empleo
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item active" onClick={() => setSelectedTipoEmpleo("On-Site")}>
                    On-Site
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => setSelectedTipoEmpleo("Remote")}>
                    Remote
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => setSelectedTipoEmpleo("Part-Time")}>
                    Part-Time
                  </a>
                </li>
              </ul>
            </div>
          )}

          {location.pathname === "/JobsOffers" && (
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle bg-gradient-to-r from-indigo-500 via-emerald-500 to-indigo-500"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cargo
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item active" onClick={() => setSelectedCargo("Full-Stack")}>
                    Full-Stack
                  </a>
                </li>
                <li>
                  <a className="dropdown-item"  onClick={() => setSelectedCargo("Front-End")}>
                    Front-End
                  </a>
                </li>
                <li>
                  <a className="dropdown-item"  onClick={() => setSelectedCargo("Back-End")}>
                    Back-End
                  </a>
                </li>
                <li>
                  <a className="dropdown-item"  onClick={() => setSelectedCargo("Mobile App")}>
                    Mobile App
                  </a>
                </li>
                <li>
                  <a className="dropdown-item"  onClick={() => setSelectedCargo("Software Engineer")}>
                    Software Engineer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item"  onClick={() => setSelectedCargo("Data Scientist")}>
                    Data Scientist
                  </a>
                </li>
                <li>
                  <a className="dropdown-item"  onClick={() => setSelectedCargo("DevOps Engineer")}>
                    DevOps Engineer
                  </a>
                </li>
              </ul>
            </div>
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
