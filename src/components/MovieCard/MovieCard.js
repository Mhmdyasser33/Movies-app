import React from 'react';
import * as actions from '../context/Actions';
import { useMovieContext } from '../context/MainContext';
import './MovieCard.css';

export const MovieCard = ({ movieInfo }) => {
  const MovieContext = useMovieContext();

  // Check if the movie is in the watchlist or watched list
  const watchListMovie = MovieContext.watchList.find((movie) => movie.imdbID === movieInfo.imdbID);
  const watchedMovie = MovieContext.watched.find((movie) => movie.imdbID === movieInfo.imdbID);

  // Determine if the add to watchlist button should be disabled
  const watchListMovieDisabled = watchListMovie ? true : watchedMovie ? true : false;

  // Determine if the add to watched button should be disabled
  const watchedMovieDisabled = watchedMovie ? true : false;

  return (
    <div className='card'>
      <div className='image-container'>
        {movieInfo.Poster ? (
          <img src={movieInfo.Poster} alt={movieInfo.Title} />
        ) : (
          <div className='imageNotFound'></div>
        )}
      </div>
      <div className='card-info'>
        <div className='heading'>
          <h3 className='movie-title'>{movieInfo.Title}</h3>
          {movieInfo.Year ? <h4 className='movie-year'>{movieInfo.Year}</h4> : "-"}
        </div>
        <div className='controls'>
          {/* Button to add the movie to the watchlist */}
          <button
            onClick={() =>
              MovieContext.movieDispatch({
                type: actions.ADD_MOVIE_TO_WATCH_LIST,
                payload: movieInfo
              })
            }
            className='btn'
            disabled={watchListMovieDisabled}
          >
            Add to WatchList
          </button>
          {/* Button to add the movie to the watched list */}
          <button
            onClick={() =>
              MovieContext.movieDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movieInfo
              })
            }
            className='btn'
            disabled={watchedMovieDisabled}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
