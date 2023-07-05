import React from 'react';
import './WatchedList.css';
import { useMovieContext } from '../context/MainContext';
import { MoviePoster } from '../moviePoster/MoviePoster';

export default function WatchedList() {
  const movieContext = useMovieContext();

  return (
    <div className='movie-list'>
      <div className='container'>
        <div className='main-heading'>
          <h2 className='title'> My WatchList </h2>
          <span className='movie-number '>{movieContext.watchList.length} {movieContext.watchList.length === 1 ? "Movie" : "Movies"}</span>
        </div>
        {movieContext.watchList.length > 0 ? (
          <div className='movie-grid'>
            {movieContext.watchList.map((movie) => (
              <MoviePoster key={movie.imdbID} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>No Movies in your list, add some!</h2>
        )}
      </div>
    </div>
  );
}
