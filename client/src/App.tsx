import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import GetRecipe from "./components/getRecipe/GetRecipe";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/search" component={GetRecipe} />
          {/* <Route path="/recipe/:name" component={Recipe} /> */}
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
