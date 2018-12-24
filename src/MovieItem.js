import React, { Component } from "react";
import "./index.css";
import MoviesData from './moviesData'
import MovieShow from './MovieShow'



const link = MoviesData.map(function (MoviesData) {
    return MoviesData.poster_path
});

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            movies: MoviesData,
           };
    }
    render() {
        return (
            <div className='container'>
                <MovieShow movies = {this.state.movies} />
            </div>
        );
    }
}

export default MovieList;

