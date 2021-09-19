import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Authentication from "./Components/Authentication/Authentication";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/signin">
            <Authentication login={true} />
          </Route>
          <Route path="/signup">
            <Authentication login={false} />
          </Route>
          <Route path="/">
            <Landing loggedIn={true} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
