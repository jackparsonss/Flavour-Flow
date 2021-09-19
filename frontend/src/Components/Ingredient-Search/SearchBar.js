import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBar(props) {
  const [currentIngredient, setCurrentIngredient] = useState("");

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      props.addCallback(new Set([...props.ingredients, e.target.value]));
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
        onChange={(e) => setCurrentIngredient(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
