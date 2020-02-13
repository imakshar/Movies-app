import React, { Component } from "react";
import Movies from "./components/Movies";
import { getMovies } from "./components/movieList";
import Grid from "@material-ui/core/Grid";
import PageNavigation from "./components/PageNavigation";
import Listgroup from "./components/common/Listgroup";
import "./index.css";
import paginate from "./utils/paginate";
import Box from "@material-ui/core/Box";
import { getGenres } from "./components/genreList";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: getMovies(),
      itemPerPage: 4,
      currentpage: 1,
      genres: getGenres(),
      Allmovies: getMovies()
    };
  }

  handleDelete = movieID => {
    const movies = this.state.movies.filter(c => c.id !== movieID);
    let currentLastPage = Math.ceil(movies.length / this.state.itemPerPage);
    let prevLastPage = Math.ceil(
      this.state.movies.length / this.state.itemPerPage
    );

    if (
      this.state.currentpage === prevLastPage &&
      currentLastPage !== prevLastPage
    ) {
      this.setState({ currentpage: currentLastPage });
    }
    this.setState({ movies });
  };

  handleLike = id => {
    this.state.movies.forEach((elm, index) => {
      if (elm.id === id) {
        this.setState(s => {
          s.movies[index].liked = !s.movies[index].liked;
          return s;
        });
        return false;
      }
    });
    // console.log(movie);
    // const temp = this.state.movies.map((element, index) => {
    //   if (element.id === movie.id) {
    //     element.liked = true;
    //   }
    //   return element;
    // });
    // console.log("temp is", temp);
    // this.setState({ movies: temp });
  };
  handlePageChange = page => {
    console.log(page);
    this.setState({ currentpage: page });
  };

  componentDidUpdate(prevProps, prevState) {}

  handleGenre = genres => {
    console.log(genres);
    const genreMovies = this.state.Allmovies.filter(c => c.genre === genres);
    console.log(genreMovies);
    this.setState({ movies: genreMovies, currentpage: 1 });
  };
  render() {
    let count = this.state.movies.length;
    const movie = paginate(
      this.state.movies,
      this.state.currentpage,
      this.state.itemPerPage
    );

    return (
      <Box mt={10}>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <Listgroup
              genres={this.state.genres}
              handleGenre={this.handleGenre}
            />
          </Grid>
          <Grid item container sm={8}>
            <Grid item sm={12}>
              <div className="container">
                {count === 0
                  ? "No Movies found"
                  : count + " Movies in Database!"}
              </div>
            </Grid>
            <Grid item sm={12}>
              <Movies
                movies={movie}
                handleDelete={this.handleDelete}
                handleLike={this.handleLike}
              />
            </Grid>
            <Grid item sm={12}>
              <PageNavigation
                itemCount={count}
                itemPerPage={this.state.itemPerPage}
                onPageChange={this.handlePageChange}
                currentpage={this.state.currentpage}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
