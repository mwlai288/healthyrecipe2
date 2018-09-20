import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import RecipeComponent from './RecipeComponent';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <div id="main-content-container">
            <Switch>
              <Route path="/recipe" component={RecipeComponent} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
