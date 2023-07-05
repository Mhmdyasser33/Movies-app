import * as actions from '../context/Actions'
export const reducer = (state , action) =>{
    switch(action.type){
     case actions.ADD_MOVIE_TO_WATCH_LIST :
      return{
        ...state ,
        watchList : [...state.watchList , action.payload]
      }
      case actions.ADD_MOVIE_TO_WATCHED:
     return{
    ...state ,
       watched : [...state.watched , action.payload] ,
       watchList :state.watchList.filter((movie) => movie.imdbID !==action.payload.imdbID)
     }
     case actions.REMOVE_MOVIE_FROM_WATCHED:
        return {
         ...state ,
           watched : state.watched.filter((movie) => movie.imdbID !== action.payload)
        }
        case actions.REMOVE_MOVIE_FROM_WATCH_LIST:
            return {
                ...state ,
                watchList : state.watchList.filter((movie) => movie.imdbID !== action.payload)
            }
            case actions.MOVE_MOVIE_TO_WATCH_LIST:
                return {
                ...state ,
                watched :state.watched.filter((movie) => movie.imdbID !== action.payload.imdbID) ,
                watchList : [...state.watchList , action.payload]
                }
                default :
                return state ;
    }

}