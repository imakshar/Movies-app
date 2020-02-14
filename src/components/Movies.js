import React, { Component } from "react";
// import Like from "./common/Like";
import { Icon, Fab } from "@material-ui/core";

export default class Movies extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">genre</th>
              <th scope="col">rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map((movie, index) => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.rating}</td>
                <td>
                  {/* <Like
                    liked={movie.liked}
                    onClick={() => this.props.handleLike(movie.id)}
                  /> */}
                  <Fab
                    size="small"
                    color={movie.liked ? "secondary" : "default"}
                    onClick={() => this.props.handleLike(movie.id)}
                  >
                    {movie.liked ? (
                      <Icon size="small"> favorite</Icon>
                    ) : (
                      <Icon>favorite_border</Icon>
                    )}
                  </Fab>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    // onClick={() => this.props.handleDelete(movie.id)}
                    onClick={() => this.props.handleDelete(movie.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
