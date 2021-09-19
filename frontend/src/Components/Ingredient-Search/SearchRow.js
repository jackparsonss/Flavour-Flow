import GenerateButton from "./GenerateButton";
import SearchBar from "./SearchBar";
import "./SearchRow.css";

function SearchRow(props) {
  return (
    <div className="searchRow">
      <SearchBar
        addCallback={props.addCallback}
        ingredients={props.ingredients}
      />
      <GenerateButton handleGenerate={props.handleGenerate} />
    </div>
  );
}

export default SearchRow;
