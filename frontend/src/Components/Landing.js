import Header from "./Header/Header";
import SearchRow from "./Ingredient-Search/SearchRow";
import Ingredient from "./Ingredient/Ingredient";
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
      <div className="landing__bottom">
        <div>
          <h3>Current Ingredients:</h3>
          <div className="landing__ingredients">
            <Ingredient name="Eggs" />
            <Ingredient name="Ketchup" />
            <Ingredient name="Bread" />
            <Ingredient name="Red Pepper" />
            <Ingredient name="Salt" />
            <Ingredient name="Pepper" />
          </div>
        </div>
        <div>
          <h3>How many recipes?</h3>
          {/* <Stepper /> */}
        </div>
      </div>
    </div>
  );
}

export default Landing;
