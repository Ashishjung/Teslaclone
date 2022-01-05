import React from "react";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ModelS from "./Components/ModelS";
import Model3 from "./Components/Model3";
import ModelX from "./Components/ModelX";
import ModelY from "./Components/ModelY";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/models">
            <ModelS />
          </Route>
          <Route path="/model3">
            <Model3 />
          </Route>
          <Route path="/modelx">
            <ModelX />
          </Route>
          <Route path="/modelY">
            <ModelY />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
