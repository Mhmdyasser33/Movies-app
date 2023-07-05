import React from 'react'
import './Watched.css'
import { useMovieContext } from '../context/MainContext'
import { MoviePoster } from '../moviePoster/MoviePoster';
export default function Watched() {
  const movieContext = useMovieContext() ;
  return (
    <div className='watch-list'>
     <div className='container'>
     <div className='main-heading'>
          <h2 className='title'> My Watched  </h2>
          <span className='movie-number'>{movieContext.watched.length} {movieContext.watched.length === 1 ? "Movie" : "Movies"}</span>
        </div>
        {movieContext.watched.length > 0 ? (
          <div className='movie-grid'>
            {movieContext.watched.map((movie) => (
              <MoviePoster key={movie.imdbID} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>No Movies in your list, add some!</h2>
        )}
     </div>
    </div>
  )
}
