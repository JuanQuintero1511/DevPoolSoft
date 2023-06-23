import { NavLink } from "react-router-dom";


export const SearchSuggestions = ({ suggestions }) => {
    return (
        <NavLink to="/profile">
            <div className="p-10px 20px hover:bg-efefef cursor-pointer">{suggestions.nombre}</div>
        </NavLink>
    )
};
