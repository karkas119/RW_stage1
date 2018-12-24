import React, { Component } from "react";


class MovieShow extends Component{

    render () {
        const Movie = this.props.movies.map((movie) => {
            return (
                <div key={movie.id} className="col-12 col-sm-6" style={{ float: "left", width: "300px" }}>
                    <ul>
                        <img width='100%' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt={movie.title} />
                        <li>{movie.title}</li>
                        <li>{movie.vote_average}</li>
                    </ul>
                </div>
            )
        });

        return(
            <div className='container'>
                <div className='row'>
                    {Movie}
                </div>
            </div>
        )
    }
}

export default MovieShow;