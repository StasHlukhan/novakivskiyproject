import { useState } from 'react';
import './LanguagePicker.css';
import ENG from '../../../img/England (GB-ENG).png';
import UA from '../../../img/Ukraine (UA).png';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react'
import { ThemeContext } from '../../../Context/ThemeContext';
const LanguagePicker = () => {
  const { t, i18n } = useTranslation();
  const [isLanguagePickerOpen, setIsLanguagePickerOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(UA);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const handleLanguagePickerClick = () => {
    setIsLanguagePickerOpen(!isLanguagePickerOpen);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsLanguagePickerOpen(false);
    setSelectedLanguage(language === 'ua' ? UA : ENG);
  };

  return (
    <div className="language-picker">
      <button className="language-picker__button" onClick={handleLanguagePickerClick}>
        <span className="language-picker__selected">
          <img src={selectedLanguage} alt="" />
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M9 1L5 5L1 1"
            stroke="#C4C4C4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
    
    className={`language-picker__dropdown ${
      isLanguagePickerOpen ? 'language-picker__dropdown--visible' : ''
    } ${darkMode ? 'dark-mode' : 'white-mode'}`}
      >
        <button className= {darkMode ? "language-picker__option dark-mode" : "language-picker__option"} onClick={() => changeLanguage('ua')}>
          <img src={UA} alt="" />
          UA
        </button>
        <button className= {darkMode ? "language-picker__option dark-mode" : "language-picker__option"} onClick={() => changeLanguage('en')}>
          <img src={ENG} alt="" />
          ENG
        </button>
      </div>
    </div>
  );
};

export default LanguagePicker;
