import React from "react";
import { BrowserRouter as R, Switch, Route } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Solutions from "./Solutions";

export default function CustomRouter() {
  return (
    <React.Fragment>
      <R>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/' exact component={Header} />
          <Route path='/about' exact component={About} />
          <Route path='/solutions' exact component={Solutions} />
        </Switch>
      </R>
    </React.Fragment>
  );
}
