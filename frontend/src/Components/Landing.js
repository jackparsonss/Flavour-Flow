import Header from "./Header/Header";
import SearchRow from "./Ingredient-Search/SearchRow";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <Header />
      <div className="landing__top">
        <h1>Enter Ingredients.</h1>
        <h1>Get Recipies.</h1>
      </div>
      <SearchRow />
    </div>
  );
}

export default Landing;
