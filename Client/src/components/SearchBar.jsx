import { useState } from "react"

export const SearchBar = () => {

  const [name, setName] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);

    // Filtrar la lista de nombres según el valor de búsqueda
    const filteredSuggestions = /* Aquí debes filtrar tu lista de nombres, tiene que ver con el back, osea traerme los nombres de los perfiles y hacer un filter*/
    setSuggestions(filteredSuggestions);
  };

  const handleSelect = (selectedName) => {
    // Hacer algo con el nombre seleccionado: (por ejemplo, selecciono el nombre y al apretarlo, que me lleve a su perfil)
    // Deberia traer una action, (la que obtiene los perfiles existentes)
    console.log("Nombre seleccionado:", selectedName);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange}/>
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion} onClick={() => handleSelect(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};
 