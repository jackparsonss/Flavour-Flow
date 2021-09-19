import { useState } from "react";
import Header from "./Header/Header";
import SearchRow from "./Ingredient-Search/SearchRow";
import Ingredient from "./Ingredient/Ingredient";
import "./Landing.css";
import Result from "./Result/Result";
import Stepper from "./Stepper/Stepper";
import axios from "axios";

function Landing() {
  const [isResults, setIsResults] = useState(false);
  const [ingredients, setIngredients] = useState(new Set());
  const [numberOfRecipes, setNumberOfRecipes] = useState(10);

  const [recipeData, setRecipeData] = useState([]);

  const removeIngredient = (id) => {
    const newIngredients = [...ingredients].filter((item) => item !== id);

    setIngredients(new Set(newIngredients));
  };

  const generateURL = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    let url =
      "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";

    [...ingredients].forEach((item) => {
      item = item.replace(/\s+/g, "-"); // remove whitespace
      url += item.toLowerCase() + ",+"; // add needed characters
    });

    url = url.slice(0, -2); // remove extra characters

    url += `&number=${numberOfRecipes}&ranking=2&apiKey=${API_KEY}`; // ranking 2 will minimize missing ingredients

    return url;
  };

  const handleGeneratedPressed = () => {
    console.log(ingredients);
    console.log("STEPPER: " + numberOfRecipes);

    setIsResults(true);
    let url = generateURL();
    axios.get(url).then((response) => {
      handleData(response.data);
    });
  };

  const handleData = (data) => {
    console.log(data);
    setRecipeData(data);
  };

  return (
    <div className="landing">
      <Header />
      <div className="landing__body">
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
                <Ingredient
                  name={ingredient}
                  removeCallback={removeIngredient}
                />
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

      {isResults ? <Result data={recipeData} /> : <></>}
    </div>
  );
}

export default Landing;
