import GenerateButton from "./GenerateButton";
import SearchBar from "./SearchBar";
import "./SearchRow.css";

function SearchRow() {
  return (
    <div className="searchRow">
      <SearchBar />
      <GenerateButton />
    </div>
  );
}

export default SearchRow;
