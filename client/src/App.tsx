<<<<<<< HEAD
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import GetRecipe from "./components/getRecipe/GetRecipe";
=======
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import RecipeComponent from './RecipeComponent';
>>>>>>> recipeComponent

class App extends React.Component {
  public render() {
    return (
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route exact={true} path="/" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/search" component={GetRecipe} />
          {/* <Route path="/recipe/:name" component={Recipe} /> */}
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
=======
      <BrowserRouter>
        <div>
          <div id="main-content-container">
            <Switch>
              <Route path="/recipe" component={RecipeComponent} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
>>>>>>> recipeComponent
    );
  }
}

export default App;
