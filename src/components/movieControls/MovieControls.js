import React, { Fragment } from 'react';
import './MovieControls.css';
import { useMovieContext } from '../context/MainContext';
import * as actions from '../context/Actions';

export const MovieControls = ({ movie, type }) => {
  const MovieContext = useMovieContext();

  return (
    <div className='control-container'>
      {/* Render controls for movies in the watchlist */}
      {type === 'watchlist' && (
        <Fragment>
          {/* Button to mark movie as watched */}
          <button
            onClick={() =>
              MovieContext.movieDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie
              })
            }
            className='ctrl-btn'
          >
            <i className='fa solid fa-eye' />
          </button>
          {/* Button to remove movie from the watchlist */}
          <button
            onClick={() =>
              MovieContext.movieDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCH_LIST,
                payload: movie.imdbID
              })
            }
            className='ctrl-btn'
          >
            <i className='fa-fw fa fa-times' />
          </button>
        </Fragment>
      )}

      {/* Render controls for watched movies */}
      {type === 'watched' && (
        <Fragment>
          {/* Button to mark movie as unwatched */}
          <button
            onClick={() =>
              MovieContext.movieDispatch({
                type: actions.ADD_MOVIE_TO_WATCH_LIST,
                payload: movie
              })
            }
            className='ctrl-btn'
          >
            <i className='fa solid fa-eye-slash' />
          </button>
          {/* Button to remove movie from the watched list */}
          <button
            onClick={() =>
              MovieContext.movieDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: movie.imdbID
              })
            }
            className='ctrl-btn'
          >
            <i className='fa-fw fa fa-times' />
          </button>
        </Fragment>
      )}
    </div>
  );
};
