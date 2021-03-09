import React, {Component} from 'react';
import {SearchBox} from "../search-box/search-box.component";
import {MovieList} from "../movie-list/movie-list.component";
import './autocomplete.styles.scss';
import _ from "lodash";
import {debounce} from "lodash";

class Autocomplete extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moviesData: [],
            searchField: '',
        };
    }


    handleChange = (e) => {
        const moviesData = [];
        const value = e.target.value;
        const inputLength = this.state.searchField.length;
        this.setState(() => ({moviesData, searchField: value}));
        if (inputLength > 2) {

            fetch('https://api.themoviedb.org/3/search/movie?api_key=0e8da4752f8db5a00dccf45ce173f85e&language=en-US&query=' + value)
                .then(response => response.json())
                .then(movies => this.setState(() => ({moviesData: movies.results})))
                .catch((error) => {
                    return error;
                });
        }
    }


    movieSelected = (value) => {
        this.setState(() => ({
            searchField: value,
            moviesData: [],
        }))
    }

    render() {
        const {moviesData, searchField} = this.state;
        return (
            <div>
                <div className="wrapper">
                    <div className="search-box-container">
                        <div className="movie-img-container">
                            <span><img src="./images/movie.svg" className="movie-img" alt="movie-icon"/></span>
                        </div>
                        <SearchBox
                            value={searchField}
                            placeholder='Enter a movie name'
                            handleChange={this.handleChange}
                        />
                        <button className="search-btn"><img src="./images/search.svg" className="search-img" alt="search-icon"/></button>
                    </div>
                    <MovieList
                        movies={moviesData}
                        movieSelected={this.movieSelected}
                    />
                </div>
            </div>
        );
    }
}

export default Autocomplete;
