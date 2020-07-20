import React from "react";
import Index from "./components/index";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/product">
          <Index />
        </Route>
        <Route path="/users">
          <Index />
        </Route>
        <Route path="/history">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
