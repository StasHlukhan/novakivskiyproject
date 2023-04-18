import React, { useState } from 'react'
import { Link, NavLink, useLocation, useMatch } from 'react-router-dom'
import Donate from '../Donate/Donate'
import './NavBar.css'
import LanguagePicker from '../UI/LanguagePicker/LanguagePicker'
const NavBar = () => {
 
  return (
    <div>
      <div className="nav_bar">
          <NavLink to='/' className="logo">Новаківський SPACE</NavLink>
          <div className="nav_elem">
          <NavLink  to="/" className="nav_link" activeclassname="active">
            Головна
          </NavLink>
          <NavLink to="/art_gallery" className="nav_link" activeclassname="active">
            Арт галерея
          </NavLink>
          <NavLink to="/posts" className="nav_link" activeclassname="active">
            Медіа
          </NavLink>
          <NavLink to="/donate" className="nav_link" activeclassname="active">
            Донат
          </NavLink>
        </div>
          <div className="ui_buttons">
            <div className="switch_ui">
              <span>Темна</span>
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
              </label>
              <span>Тема</span>
            </div>
            
            <LanguagePicker></LanguagePicker>
          </div>
      </div>
    </div>
  )
}

export default NavBar