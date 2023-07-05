import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MovieCard } from '../MovieCard/MovieCard';
import './Add.css'
export default function Add() {
  const [movieName , setMovieName] = useState("") ;
  const [movieDetails , setMovieDetails] = useState([]) ;
      useEffect(() =>{
        axios.get(`https://www.omdbapi.com/?s=${movieName}&apikey=3e701dd3`)
        .then((res) =>{
         // check if there is data in Api or not
        if(res.data.Search){
            setMovieDetails(res.data.Search)
          }
        })
        .catch((error) =>{
          console.log("error message");
      })
      } , [movieName])
  return (
    <div className='add-page'>
    <div className='container'>
     <div className='add-content'>
      <div className='input-container'>
        <input type='text' placeholder='Search for a movie' value={movieName} onChange={(e) => setMovieName(e.target.value)}/>
      </div>
       {movieDetails.length > 0 &&  (
            <ul className='result_data'>
             {movieDetails.map((movie) => (
              <li key={movie.imdbID}>
                 {<MovieCard movieInfo={movie}/>}
              </li>
             ))}
            </ul>
       )}
     </div>
    </div>
    </div>
  )
}
