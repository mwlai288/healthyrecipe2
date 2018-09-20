import * as React from "react";
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
    );
  }
}

export default App;
