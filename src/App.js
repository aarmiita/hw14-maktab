import "./App.css";
import React from "react";
import Table from "./components/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import UserDetailes from "./components/UserDetailes";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Table />
        </Route>
        <Route exact path="/users/:id">
          <UserDetailes />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
