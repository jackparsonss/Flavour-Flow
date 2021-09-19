import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar({ addCallback, ingredients }) {
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      addCallback(new Set([...ingredients, e.target.value]));
      e.target.value = "";
    }
  };

  return (
    <div className="searchBar">
      <FaSearch className="searchBar__icon" size={30} />
      <input
        className="searchBar__input"
        placeholder="Search for ingredients..."
        onKeyUp={(e) => handleEnter(e)}
      />
    </div>
  );
}

export default SearchBar;
