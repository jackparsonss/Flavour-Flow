import "./Stepper.css";

function Stepper() {
  return (
    <div className="stepper">
      <input className="stepper__input" placeholder="10" />
      <div className="stepper__counter">
        <div className="stepper__upcount"></div>
        <div className="stepper__downcount"></div>
      </div>
    </div>
  );
}

export default Stepper;
