import React, {} from 'react';
import { Route, Routes,useRoutes } from 'react-router-dom';
import './App.css'
import Main from './components/MainPage/MainPage';
import MapRoad from './components/MapRoad/MapRoad';
import AppRouter from './components/AppRouter/AppRouter';
import Home from './components/Home/Home';
import MainPage from './components/MainPage/MainPage';
function App() {

  

  return (
    <div >

      
      
      <AppRouter></AppRouter>
      
    </div>
  );
}

export default App;
