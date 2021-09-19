import "./Ingredient.css";
import { animated, useSpring } from "react-spring";

function Ingredient(props) {
  const styles = useSpring({
    from: { scaleX: 0, scaleY: 0, opacity: 0 },
    to: { scaleX: 1, scaleY: 1, opacity: 1 },
  });

  return (
    <animated.div style={styles} className="ingredient">
      <div
        className="ingredient__x"
        onClick={() => props.removeCallback(props.name)}
      >
        X
      </div>
      <p>{props.name}</p>
    </animated.div>
  );
}

export default Ingredient;
