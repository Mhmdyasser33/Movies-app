import React, { Fragment } from 'react'
import './MovieControls.css'
import { useMovieContext } from '../context/MainContext'
import * as actions from '../context/Actions'
export const MovieControls = ({movie , type}) => {
    const MovieContext =useMovieContext() ;
  return (
    <div className='control-container'>

  {type === "watchlist" && (
     <Fragment>
     <button  onClick={() =>MovieContext.movieDispatch({
       type : actions.ADD_MOVIE_TO_WATCHED,
       payload :  movie

     })} className='ctrl-btn'>
     <i className='fa solid fa-eye'/>
     </button>
     <button onClick={() => MovieContext.movieDispatch({
        type : actions.REMOVE_MOVIE_FROM_WATCH_LIST ,
        payload : movie.imdbID
     })} className='ctrl-btn'>
     <i className='fa-fw fa fa-times'/>
     </button>
     </Fragment>
  )}
   {type === "watched" && (
     <Fragment>
     <button onClick={() => MovieContext.movieDispatch({
       type : actions.ADD_MOVIE_TO_WATCH_LIST,
       payload : movie
     })} className='ctrl-btn'>
     <i className='fa solid fa-eye-slash'/>
     </button>
     <button onClick={() =>MovieContext.movieDispatch({
       type : actions.REMOVE_MOVIE_FROM_WATCHED ,
       payload : movie.imdbID
     })} className='ctrl-btn'>
     <i className='fa-fw fa fa-times'/>
     </button>
     </Fragment>
  )}
    </div>
  )
}
