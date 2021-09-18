import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBar() {
  const [ingredients, setIngredients] = useState(new Set());
  const [currentIngredient, setCurrentIngredient] = useState("");

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      console.log("VALUE TO ADD: " + e.target.value);
      setIngredients(
        (ingredients) => new Set([...ingredients, e.target.value])
      );
      console.log(ingredients);
    }
  };

  return (
    <div className="searchBar">
      <FaSearch className="searchBar__icon" size={30} />
      <input
        className="searchBar__input"
        placeholder="Search for ingredients..."
        onKeyUp={handleEnter}
        onChange={(e) => {
          setCurrentIngredient(e.target.value);
          console.log(currentIngredient);
        }}
      />
    </div>
  );
}

export default SearchBar;
