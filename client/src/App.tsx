import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import GetRecipe from "./components/getRecipe/GetRecipe";
import Recipe from "./components/getRecipe/Recipe";
import Nav from "./components/navbar/Nav";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Nav />
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route path="/register" component={Register} />
              <Route path="/search" component={GetRecipe} />
              <Route path="/recipe/:name" component={Recipe} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
