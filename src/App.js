import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ActorListing from "./containers/ActorListing";
import Header from "./containers/Header";
import "./App.css";
import ActorDetails from "./containers/ActorDetails";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ActorListing} />
       
          <Route path="/actor/:productId" component={ActorDetails} />

          <Route path="/Favorites" exact component={ActorListing} />
          <Route path="/actor/:productId" component={ActorDetails} />

          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
