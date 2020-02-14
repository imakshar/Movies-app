import React, { Component, Fragment } from "react";
import "./index.css";
import { Switch, Route , BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import MovieApp from "./components/MovieApp";
import Navbar from "./components/Navbar";
import Rating from "./components/Rating";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/movies/:category?" component={MovieApp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/rating" component={Rating} />
          <Route render={()=><h1>404</h1>} />
        </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
