import { HashLink } from "react-router-hash-link";
import "./GenerateButton.css";

function GenerateButton({ handleGenerate }) {
  return (
    <button className="generateButton" onClick={handleGenerate}>
      <HashLink
        scroll={(el) =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        className="generateButton__link"
        to="/#result"
      >
        Generate
      </HashLink>
    </button>
  );
}

export default GenerateButton;
