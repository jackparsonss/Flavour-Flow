import "./GenerateButton.css";

function GenerateButton(props) {
  return (
    <button className="generateButton" onClick={props.handleGenerate}>
      Generate
    </button>
  );
}

export default GenerateButton;
