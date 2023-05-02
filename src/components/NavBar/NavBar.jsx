import React, { useState } from 'react'
import {  NavLink,  } from 'react-router-dom'
import './NavBar.css'
import LanguagePicker from '../UI/LanguagePicker/LanguagePicker'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const NavBar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  
  const [checked, setChecked] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  // toggle burger menu change
  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass(` ${darkMode ? "menu_d visible" : "menu visible"} `)
    } else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  const menuHide = () => {
    setBurgerClass("burger-bar unclicked")
    setMenuClass("menu hidden")
  }

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(checked));
  }, [checked]);
  return (
    <div>  
      <div  className={darkMode ? "navbar dark-mode-nav" : "navbar"}>
            
          <NavLink onClick={()=> window.scrollTo({ behavior: 'smooth', top: 0 })} to='/'className={darkMode ? "logo dark-mode-link" : "logo"}>Новаківський SPACE</NavLink>
          <div className="nav_elem">
          <NavLink  onClick={()=> window.scrollTo({ behavior: 'smooth', top: 0 })} to="/" className={darkMode ? "nav_link dark-mode-link" : "nav_link"} activeclassname="active">
          {t("main")}
          </NavLink>
          <NavLink onClick={()=> window.scrollTo({ behavior: 'smooth', top: 0 })} to="/art_gallery" className={darkMode ? "nav_link dark-mode-link" : "nav_link"} activeclassname="active">
          {t("art_gallery")}
          </NavLink>
          <NavLink  onClick={()=> window.scrollTo({ behavior: 'smooth', top: 0 })}to="/posts" className={darkMode ? "nav_link dark-mode-link" : "nav_link"} activeclassname="active">
          {t("media")}
          </NavLink>
          <NavLink onClick={()=> window.scrollTo({ behavior: 'smooth', top: 0 })} to="/donate" className={darkMode ? "nav_link dark-mode-link" : "nav_link"} activeclassname="active">
          {t("donate")}
          </NavLink>
        </div>
          <div className="ui_buttons" >
            <div className="switch_ui">
              <span className={darkMode ? "switch_name dark-mode-link" : "switch_name"}>{t("dark")}</span>
              <label className="switch">
              <input type="checkbox" checked={checked} onChange={() => {
                toggleDarkMode();
                setChecked(!checked);
              }} />
                <span className="slider round"></span>
              </label>
              <span className={darkMode ? "switch_name dark-mode-link" : "switch_name"}>{t("theme")}</span>
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
          
            <NavLink onClick={updateMenu}  to="/" className={darkMode ? "nav_link dark-mode-link" : "nav_link"} activeclassname="active">
            {t("main")}
            </NavLink>
            <NavLink onClick={updateMenu} to="/art_gallery" className={darkMode ? "nav_link dark-mode-link" : "nav_link"} activeclassname="active">
            {t("art_gallery")}
            </NavLink>
            <NavLink onClick={updateMenu} to="/posts" className={darkMode ? "nav_link dark-mode-link" : "nav_link"} activeclassname="active">
            {t("media")}
            </NavLink>
            <NavLink onClick={updateMenu} to="/donate" className={darkMode ? "nav_link dark-mode-link" : "nav_link"} activeclassname="active">
            {t("donate")}
            </NavLink>
        
          
          </div>
      </div>
    </div>
  )
}

export default NavBar
