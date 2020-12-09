import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import reducer from "./connections/Reducer";

import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import ItemDetail from "./components/ItemDetail";

import "./styles/styles.css";

const initialState = {
  searchValue: "",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
