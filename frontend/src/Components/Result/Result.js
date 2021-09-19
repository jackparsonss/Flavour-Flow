import Recipe from "./Recipe";
import "./Result.css";

function Result({ data }) {
  return (
    <div className="result" id="result">
      <h1 className="result__heading">Recipes You Can Make:</h1>
      <div className="result__recipes">
        {data.map((recipe) => (
          <Recipe
            name={recipe.title}
            image={recipe.image}
            ingredients={recipe.usedIngredients}
            missingIngredients={recipe.missedIngredients}
          />
        ))}
      </div>
    </div>
  );
}

export default Result;
