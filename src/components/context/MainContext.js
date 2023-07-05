import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from './reducer';

// Set initial state using localStorage data if available
const initialState = {
  watchList: localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [],
  watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : []
};

export const MainContext = createContext(initialState);

const MainContextProvider = ({ children }) => {
  // Use reducer to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Update localStorage when state changes
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  return (
    <MainContext.Provider value={{
      watchList: state.watchList,
      watched: state.watched,
      movieDispatch: dispatch
    }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

export const useMovieContext = () => {
  return useContext(MainContext);
};
