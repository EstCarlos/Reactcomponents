import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Sidenav from "../pages/Sidenav";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/font-awesome" component={Sidenav} />
        <Redirect from="*" to="/font-awesome" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
