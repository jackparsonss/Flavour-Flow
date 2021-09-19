import "./Stepper.css";

function Stepper(props) {
  return (
    <div className="stepper">
      <input
        className="stepper__input"
        placeholder="10"
        onChange={(e) => props.updateCallback(e.target.value)}
      />
      <div className="stepper__counter">
        <div className="stepper__upcount"></div>
        <div className="stepper__downcount"></div>
      </div>
    </div>
  );
}

export default Stepper;
