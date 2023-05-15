import React from 'react'
import './Donate.css'
import MyButton from '../../components/UI/MyButton/MyButton'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import { useTranslation } from 'react-i18next';
const Donate = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  const { t, i18n } = useTranslation();
  const {darkMode} = useContext(ThemeContext)
  return (
    <div>
        
        <div className="donate_page">
            <div className={darkMode ? "donate_info dark-mode" : "donate_info white-mode"}>
                <h2 className='donate_title'>{t('donate_title')}</h2>
                <p className='donate_text'>{t('donate_text1')}</p>
                <p className='donate_text'>{t('donate_text2')}</p>
                <MyButton style={{marginTop:50,marginLeft:0}}><Link target="_blank"  to='https://www.biggggidea.com/project/nemuzejni-istori-oleksi-novakivskogo/' className='rekviz'>{t('rekviz')}</Link> </MyButton>
            </div>
        </div>
    </div>
  )
}

export default Donate