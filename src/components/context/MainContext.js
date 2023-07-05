import {createContext, useContext, useEffect, useReducer } from "react";
import{reducer} from './reducer'
import { json } from "react-router";
const initialState = {
  watchList : localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [],
  watched :   localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : []
}
export const MainContext = createContext(initialState)
const MainContextProvider = ({children}) => {

     const [state , dispatch ] = useReducer(reducer , initialState) ;
     useEffect(() =>{
  localStorage.setItem("watchList" , JSON.stringify(state.watchList)) ;
  localStorage.setItem("watched" , JSON.stringify(state.watched)) ;
     } , [state])
     return   (
       <MainContext.Provider value={{
        watchList :state.watchList ,
        watched : state.watched ,
        movieDispatch : dispatch ,
     }}>
        {children}
     </MainContext.Provider>
)}
export default MainContextProvider ;

export const useMovieContext = () =>{
  return useContext(MainContext) ;
}
