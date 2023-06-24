import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { users } from "../searchUsersDemo";

export const SearchBar = ({setSuggestions}) => {

  const [name, setName] = useState("");
 

  const handleChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setName(searchValue);
  
    // Filtrar la lista de nombres según el valor de búsqueda
    const filteredSuggestions = users.filter(
      (user) => user.nombre.toLowerCase().includes(searchValue)
    );
  
    setSuggestions(searchValue ? filteredSuggestions : []);
  };

  return (
    <div className="d-flex flex-grow-2 w-50">
      <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" value={name} onChange={handleChange}/>
    </div>
  );
};
 