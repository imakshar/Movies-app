import React, { Component } from "react";
import Movies from "./Movies";
import { getMovies } from "./movieList";
import { Grid, Button, withStyles, Tab, Tabs } from "@material-ui/core";
import PageNavigation from "./PageNavigation";
import Listgroup from "./common/Listgroup";
import paginate from "./../utils/paginate";
import Box from "@material-ui/core/Box";
import { getGenres } from "./genreList";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Action from "./Action";
const styles = {
  Buttonspace: {
    marginLeft: 10
  }
};
class MovieApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: getMovies(),
      itemPerPage: 4,
      currentpage: 1,
      genres: getGenres(),
      Allmovies: getMovies(),
      genreTitle: "All",
      tabValue: 0,
      category: props.match.params.category
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match.params.category != state.category) {
      state.category = props.match.params.category;
    }
    // console.log(props.match.params.category,state.category);

    return { ...state };
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
    this.setState({ movies: genreMovies, currentpage: 1, genreTitle: genres });
  };
  handleChange = (event, newValue) => {
    this.setState({ tabValue: newValue });
    const url = this.state.genres[newValue].url;

    this.props.history.push(url)
  };
  filteredMovies = ()=>{
    let g = this.state.genres[this.state.tabValue]
    return this.state.movies.filter(c=>c.genre===g.name)
  }
  render() {
    let count = this.state.movies.length;
    const { classes } = this.props;
    const movie = paginate(
      this.state.movies,
      this.state.currentpage,
      this.state.itemPerPage
    );

    return (
      <Box mt={1}>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <Listgroup
              genres={this.state.genres}
              handleGenre={this.handleGenre}
              title={this.state.genreTitle}
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
          <Grid item sm={12}>
            <div>
              {/* <BrowserRouter> */}
              <Tabs
                value={this.state.tabValue}
                onChange={this.handleChange}
                aria-label="simple tabs example"
              >
                {this.state.genres.map((element, index) => (
                  <Tab key={index} label={element.name} />
                ))}
              </Tabs>
              {/* {console.log(this.props.match.params.category)
                } */}
              {/* {this.state.category?
                <Switch>
                <Route exact path="/movies/action" render={()=><Action {...this.state} handleGenre={this.handleGenre} />} /> 
                  <Route exact path="/movies/comedy"  render={()=><Listgroup {...this.state}/>} />
                  <Route exact path="/movies/drama" render={()=> <Listgroup {...this.state}/>} />
                </Switch>
                :null} */}
              {this.state.category ? (
                <Action
                  movies={this.filteredMovies()}
                  handleGenre={this.handleGenre}
                  handleDelete={this.handleDelete}
                  handleLike={this.handleLike}
                />
              ) : null}
              {/* </BrowserRouter> */}
            </div>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
export default withStyles(styles)(MovieApp);
