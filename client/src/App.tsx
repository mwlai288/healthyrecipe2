import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={SignIn} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}

export default App;
