import React from 'react'
import * as actions from '../context/Actions'
import { useMovieContext } from '../context/MainContext'
import './MovieCard.css'
export const MovieCard = ({movieInfo}) => {
  const MovieContext = useMovieContext() ;
   const watchListMovie = MovieContext.watchList.find((movie) => movie.imdbID === movieInfo.imdbID) ;
   const watchedMovie =   MovieContext.watched.find((movie) => movie.imdbID === movieInfo.imdbID)
   const watchListMovieDisabled = watchListMovie ? true : watchedMovie ? true : false
  const watchedMovieDisabled = watchedMovie ? true  : false
  return (
    <div className='card'>
     <div className='image-container'>
    {movieInfo.Poster ? <img src={movieInfo.Poster} alt={movieInfo.Title}/>: <div className='imageNotFound'></div>}
     </div>
     <div className='card-info'>
        <div className='heading'>
           <h3 className='movie-title'>{movieInfo.Title}</h3>
           {movieInfo.Year ? <h4 className='movie-year'>{movieInfo.Year}</h4> : "-"}
        </div>
        <div className='controls'>
            <button onClick={() =>MovieContext.movieDispatch({
              type : actions.ADD_MOVIE_TO_WATCH_LIST ,
              payload : movieInfo
            })} className='btn' disabled={watchListMovieDisabled}> Add to WatchList</button>
            <button onClick={() =>MovieContext.movieDispatch({
              type : actions.ADD_MOVIE_TO_WATCHED ,
              payload : movieInfo
            })} className='btn' disabled={watchedMovieDisabled}> Add to Watched</button>
        </div>
     </div>
    </div>
  )
}
