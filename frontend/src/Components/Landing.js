import { useState } from "react";
import Header from "./Header/Header";
import SearchRow from "./Ingredient-Search/SearchRow";
import Ingredient from "./Ingredient/Ingredient";
import "./Landing.css";
import Stepper from "./Stepper/Stepper";

function Landing() {
  const [ingredients, setIngredients] = useState(
    new Set(["Eggs", "Ketchup", "Bread", "Red Pepper", "Salt", "Pepper"])
  );
  const [numberOfRecipes, setNumberOfRecipes] = useState(10);

  const removeIngredient = (id) => {
    const newIngredients = [...ingredients].filter((item) => item !== id);

    setIngredients(new Set(newIngredients));
  };

  const handleGeneratedPressed = () => {
    console.log(ingredients);
    console.log("STEPPER: " + numberOfRecipes);
  };

  return (
    <div className="landing">
      <Header />
      <div className="landing__top">
        <h1>Enter Ingredients.</h1>
        <h1>Get Recipies.</h1>
      </div>
      <SearchRow
        addCallback={setIngredients}
        ingredients={ingredients}
        handleGenerate={handleGeneratedPressed}
      />
      <div className="landing__bottom">
        <section className="landing__ingredientsSection">
          <h3>Current Ingredients:</h3>
          <div className="landing__ingredients">
            {[...ingredients].map((ingredient) => (
              <Ingredient name={ingredient} removeCallback={removeIngredient} />
            ))}
          </div>
        </section>
        <section className="landing__stepper">
          <h3>How many recipes?</h3>
          <Stepper
            updateCallback={setNumberOfRecipes}
            number={numberOfRecipes}
          />
        </section>
      </div>
    </div>
  );
}

export default Landing;
