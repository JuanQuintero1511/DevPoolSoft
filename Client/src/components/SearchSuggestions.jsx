import { NavLink } from "react-router-dom";

export const SearchSuggestions = ({ suggestions, closeSuggestions }) => {
  const handleClick = () => {
    closeSuggestions(); 
  };
  console.log(suggestions)
  return (
    <NavLink to="/profile" onClick={handleClick}>
      <div className="p-10px 20px hover:bg-efefef cursor-pointer">
        {suggestions.userName}
      </div>
    </NavLink>
  );
};