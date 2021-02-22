import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Button } from "antd";
import "./App.css";

import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
