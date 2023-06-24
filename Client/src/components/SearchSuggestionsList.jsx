import { SearchSuggestions } from "./SearchSuggestions";

export const SearchSuggestionsList = ({ suggestions }) => {
  return (
    <div className="absolute w-64 bg-white flex flex-col shadow-md rounded-lg mt-[5px] max-h-300px overflow-y-auto top-full left-0 ml-[400px]"> {/* Agregamos las clases left-0 y ml-auto aquí */}
      {suggestions.map((result, id) => {
        return (
          <div
            className="px-4 py-2 border-b border-gray-200 hover:bg-gray-100"
            key={id}
          >
            <SearchSuggestions suggestions={result} />
          </div>
        );
      })}
    </div>
  );
};