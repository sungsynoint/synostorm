import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Surveys from "./components/Surveys";
import Survey from "./components/edit/Survey"

class App extends Component {
  render() {
    return (
      <main className="App container">
        <Switch>
          <Route path="/surveys" component={Surveys} />
          <Route path="/edit-survey" component={Survey} />
          <Redirect from="/" exact to="/surveys" />
        </Switch>
      </main>
    );
  }
}

export default App;
