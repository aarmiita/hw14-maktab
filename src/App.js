import "./App.css";
import React from "react";
import Table from "./components/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import UserDetailes from "./components/UserDetailes";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Table />
        </Route>
        <Route exact path="/users/:id">
          <Header />
          <UserDetailes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
