import * as React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
=======
import "./App.css";
import GetRecipe from "./components/getRecipe/GetRecipe";
import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <div id="main-content-container">
            <Switch>
              <Route path="/search" component={GetRecipe} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
>>>>>>> getRecipe
    );
  }
}

export default App;
