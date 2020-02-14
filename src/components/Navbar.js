import React, { Component } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import {Link } from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar variant="dense">
            
            <Button  color="inherit" to="/" component={Link} >
              Home
            </Button>
            
            <Button color="inherit" to="/movies" component={Link} >
              Movies
            </Button>
            
            <Button color="inherit" to="/rating" component={Link}>
              Rating
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
