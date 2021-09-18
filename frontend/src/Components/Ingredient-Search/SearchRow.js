import Generate from "./Generate";
import SearchBar from "./SearchBar";
import "./SearchRow.css";

function SearchRow() {
  return (
    <div className="searchRow">
      <SearchBar />
      <Generate />
    </div>
  );
}

export default SearchRow;
