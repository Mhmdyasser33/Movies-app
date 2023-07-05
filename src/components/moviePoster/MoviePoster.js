import React from 'react'
import './MoviePoster.css'
import { MovieControls } from '../movieControls/MovieControls'
export const MoviePoster = ({movie , type}) => {
  return (
    <div className='movie-poster'>
            {movie.Poster ? <img src={movie.Poster} alt={movie.Title}/> : <div className='emptyPage'></div>}
            <MovieControls movie={movie} type={type}/>
    </div>
  )
}
