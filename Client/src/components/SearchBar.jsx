import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAndCompanies } from "../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export const SearchBar = ({ setSuggestions }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const usersYcompanies = useSelector((state) => state.usersYcompanies);

  useEffect(() => {
    dispatch(getUsersAndCompanies());
  }, [dispatch]);

  const handleChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setName(searchValue);

    // Filtrar la lista de nombres según el valor de búsqueda
    const filteredSuggestions = usersYcompanies.filter(
      (user) => user.userName.toLowerCase().includes(searchValue)
    );
  

    setSuggestions(searchValue ? filteredSuggestions : []);
  };

  return (
    <div className="d-flex flex-grow-2 w-50">
      <input
        className="form-control me-2 rounded-pill"
        type="search"
        placeholder="Search"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};
 