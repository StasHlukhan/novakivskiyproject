import React, { useState } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
function App() {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

  function toggleDarkMode() {
    setDarkMode((prevState) => {
      localStorage.setItem('darkMode', !prevState);
      return !prevState;
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
      }}
    >
      <div className={darkMode ? 'dark-mode' : ''}>
        <AppRouter/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
// const App = () => {

//   const { t, i18n } = useTranslation();

//   const changeLanguage = (language) => {
//     i18n.changeLanguage(language);
//   };
//   return (
//     <>
//       <button onClick={() => changeLanguage("en")}>EN</button>
//       <button onClick={() => changeLanguage("ru")}>RU</button>
//       <div>{t("text")}</div>
//       <div>{t("hello")}</div>
//     </>
//   )
// }
// export default App
