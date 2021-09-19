import "./Ingredient.css";

function Ingredient(props) {
  return (
    <div className="ingredient">
      <div
        className="ingredient__x"
        onClick={() => props.removeCallback(props.name)}
      >
        X
      </div>
      <p>{props.name}</p>
    </div>
  );
}

export default Ingredient;
