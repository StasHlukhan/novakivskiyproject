import React from 'react'
import './MainPage.css'
import NavBar from '../NavBar/NavBar'
import MapRoad from '../MapRoad/MapRoad'
import Home from '../Home/Home'
import { useEffect } from 'react'
function MainPage() {
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <div className='main_page'>
        
        <Home></Home>
        
        <MapRoad></MapRoad>
        
        
    </div>
  )
}

export default  MainPage