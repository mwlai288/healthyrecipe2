import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import GetRecipe from "./components/getRecipe/GetRecipe";
import Recipe from "./components/getRecipe/Recipe";
import Nav from "./components/navbar/Nav";
import Friends from "./components/friends/Friends";
import FriendsDash from "./components/friends/FriendsDash";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route path="/register" component={Register} />
              <Route path="/search" component={GetRecipe} />
              <Route path="/recipe/:name" component={Recipe} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/friends" component={Friends} />
              <Route path="/:id/friend" component={FriendsDash} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
