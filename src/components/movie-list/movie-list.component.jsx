import React from 'react';
import './movie-list.styles.scss';
import {Movie} from "../movie/movie.component";

export const MovieList = (props) => {
    if (props.movies) {
        return (
            <div>
                <ul className='movie-list'>
                    {
                        props.movies.slice(0, 8).map((movie) =>
                            <Movie
                                key={movie.id}
                                movie={movie}
                                handleClick={() => props.movieSelected(movie.title)}
                            />
                        )}
                </ul>
            </div>
        );
    } else return null;
}
