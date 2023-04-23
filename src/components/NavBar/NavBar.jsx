import React, { useState } from 'react'
import { Link, NavLink, useLocation, useMatch } from 'react-router-dom'
import Donate from '../Donate/Donate'
import './NavBar.css'
import LanguagePicker from '../UI/LanguagePicker/LanguagePicker'
const NavBar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    
    const menuHide = ()=>{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
    }
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
              <span className='switch_name'>Темна</span>
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
              </label>
              <span className='switch_name'>Тема</span>
            </div>
            
            <LanguagePicker></LanguagePicker>
          </div>
          <div className='burger'>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </div>
          
      </div>  
      <div  className={menu_class}>
          <div className="nav_mobile">
          
            <NavLink onClick={updateMenu}  to="/" className="nav_link" activeclassname="active">
              Головна
            </NavLink>
            <NavLink onClick={updateMenu} to="/art_gallery" className="nav_link" activeclassname="active">
              Арт галерея
            </NavLink>
            <NavLink onClick={updateMenu} to="/posts" className="nav_link" activeclassname="active">
              Медіа
            </NavLink>
            <NavLink onClick={updateMenu} to="/donate" className="nav_link" activeclassname="active">
              Донат
            </NavLink>
        
          </div>
      </div>
    </div>
  )
}

export default NavBar