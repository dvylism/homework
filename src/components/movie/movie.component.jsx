import React from 'react';
import './movie.styles.scss';

export const Movie = (props) => {
    return (
        <li onClick={props.handleClick}>
            <div className="movie-header">
            <img src="/images/movie.svg" alt="movie-icon"/>
                <b>{props.movie.title}</b>
            </div>
            <div className="movie-information"><small>{props.movie.vote_average} Rating, {props.movie.release_date.slice(0,4)}</small></div>
        </li>
    )
};
