import "./Recipe.css";

function Recipe({ name, image, ingredients, missingIngredients }) {
  return (
    <div className="recipe">
      <img className="recipe__image" src={image} alt="recipe" />
      <div className="recipe__body">
        <h3 className="recipe__title">{name}</h3>
        <div className="recipe__ingredients">
          <div className="recipe__have">
            <h4>Ingredients You Have:</h4>
            <ul>
              {ingredients.map((ingredient) => (
                <li>{ingredient.original}</li>
              ))}
            </ul>
          </div>
          <div className="recipe__missing">
            <h4>Missing Ingredients:</h4>
            <ul>
              {missingIngredients.map((ingredient) => (
                <li>{ingredient.original}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
