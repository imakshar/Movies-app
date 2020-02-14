import React, { Component } from "react";

export default class Listgroup extends Component {
  render() {
    const { genres, handleGenre, title } = this.props;
    // console.log("is id", genreId);
    return (
      <div>
        <ul className="list-group">
          {genres.map(element => (
            <li
              className={
                element.name === title
                  ? "list-group-item active"
                  : "list-group-item"
              }
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
