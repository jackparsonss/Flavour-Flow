import "./GenerateButton.css";

function GenerateButton({ handleGenerate }) {
  return (
    <button className="generateButton" onClick={handleGenerate}>
      Generate
    </button>
  );
}

export default GenerateButton;
