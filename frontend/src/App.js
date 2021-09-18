import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from "./Components/Ingredient-Search/SearchBar";
import SearchRow from "./Components/Ingredient-Search/SearchRow";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <SearchRow />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
