import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import ItemDetail from "./components/ItemDetail";

import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/items/:id">
          <ItemDetail />
        </Route>
        <Route path="/items">
          <SearchResults />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
