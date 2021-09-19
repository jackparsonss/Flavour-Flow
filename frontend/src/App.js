import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Authentication from "./Components/Authentication/Authentication";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/signin">
            <Authentication login={true} authCallback={setLoggedIn} />
          </Route>
          <Route path="/signup">
            <Authentication login={false} authCallback={setLoggedIn} />
          </Route>
          <Route path="/">
            <Landing loggedIn={loggedIn} authCallback={setLoggedIn} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
