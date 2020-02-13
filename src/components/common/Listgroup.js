import React, { Component } from "react";

export default class Listgroup extends Component {
  render() {
    const { genres, handleGenre } = this.props;
    return (
      <div>
        <ul className="list-group">
          {genres.map(element => (
            <li
              className="list-group-item"
              key={element.id}
              onClick={() => handleGenre(element.name)}
            >
              {element.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
