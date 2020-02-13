import React, { Component } from "react";

export default class Like extends Component {
  render() {
    let className = "fa fa-heart";
    if (!this.props.liked) className = className + "-o";
    return (
      <i
        onClick={this.props.onClick}
        className={className}
        aria-hidden="true"
      ></i>
    );
  }
}
