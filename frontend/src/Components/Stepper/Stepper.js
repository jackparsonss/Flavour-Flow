import "./Stepper.css";

function Stepper({ updateCallback, number }) {
  return (
    <div className="stepper">
      <input
        className="stepper__input"
        placeholder={number}
        onChange={(e) => updateCallback(e.target.value)}
        min="1"
        max="100"
      />
      <div className="stepper__counter">
        <div
          className="stepper__upcount stepper__count"
          onClick={() => updateCallback(number + 1)}
        ></div>
        <div
          className="stepper__downcount stepper__count"
          onClick={() => updateCallback(number - 1)}
        ></div>
      </div>
    </div>
  );
}

export default Stepper;
