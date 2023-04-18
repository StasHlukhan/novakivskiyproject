import React from 'react'
import './MainPage.css'
import NavBar from '../NavBar/NavBar'
import MapRoad from '../MapRoad/MapRoad'
import Home from '../Home/Home'
function MainPage() {
  return (
    <div className='main_page'>
        
        {/* <Home></Home> */}
        <MapRoad></MapRoad>
    </div>
  )
}

export default  MainPage