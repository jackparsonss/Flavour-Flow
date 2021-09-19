import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBar(props) {
  const [currentIngredient, setCurrentIngredient] = useState("");

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      const val = e.target.value;

      console.log("VALUE TO ADD: " + val);
      props.addCallback(new Set([...props.ingredients, val]));
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
        onChange={(e) => {
          setCurrentIngredient(e.target.value);
          console.log(currentIngredient);
        }}
      />
    </div>
  );
}

export default SearchBar;
