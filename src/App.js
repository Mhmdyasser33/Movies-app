import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContextProvider from './components/context/MainContext'
import Header from './components/Header/Header';
import WatchedList from './components/WatchedList/WatchedList';
import Watched from './components/Watched/Watched';
import Add from './components/Add/Add';
function App() {
  return (
 <Router>
  <Header/>
  <MainContextProvider>
      <Routes>
        <Route path="/" element={<WatchedList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
  </MainContextProvider>
    </Router>

  );
}

export default App;
