import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo_side">
            <p className="logo_foot">Новаківський SPACE</p>
            <div className="line_foot"></div>
            <div className="logo_info">Non Copyrighted © 2022 Upload by rich technologies</div>
        </div>
        <div className="nav_side">
            <div className="phone_num">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M23.0831 8.33317C24.711 8.65078 26.207 9.44693 27.3798 10.6197C28.5526 11.7925 29.3488 13.2886 29.6664 14.9165M23.0831 1.6665C26.4652 2.04223 29.619 3.5568 32.0268 5.96152C34.4345 8.36624 35.9531 11.5182 36.3331 14.8998M34.6664 28.1998V33.1998C34.6683 33.664 34.5732 34.1235 34.3872 34.5487C34.2013 34.974 33.9286 35.3558 33.5865 35.6696C33.2445 35.9834 32.8407 36.2223 32.401 36.371C31.9613 36.5197 31.4953 36.5749 31.0331 36.5332C25.9044 35.9759 20.9781 34.2234 16.6497 31.4165C12.6228 28.8576 9.20862 25.4435 6.64973 21.4165C3.83302 17.0685 2.08013 12.1182 1.53306 6.9665C1.49141 6.50562 1.54618 6.0411 1.69389 5.60254C1.8416 5.16398 2.07901 4.76099 2.391 4.41921C2.70299 4.07743 3.08273 3.80435 3.50604 3.61737C3.92935 3.43039 4.38696 3.33361 4.84973 3.33317H9.84973C10.6586 3.32521 11.4427 3.61163 12.056 4.13906C12.6693 4.66648 13.0699 5.39891 13.1831 6.19984C13.3941 7.79995 13.7855 9.37105 14.3497 10.8832C14.574 11.4797 14.6225 12.128 14.4896 12.7513C14.3566 13.3746 14.0478 13.9467 13.5997 14.3998L11.4831 16.5165C13.8557 20.6891 17.3105 24.1439 21.4831 26.5165L23.5997 24.3998C24.0529 23.9517 24.625 23.6429 25.2483 23.51C25.8715 23.3771 26.5199 23.4256 27.1164 23.6498C28.6285 24.2141 30.1996 24.6055 31.7997 24.8165C32.6093 24.9307 33.3487 25.3385 33.8773 25.9623C34.4058 26.5861 34.6867 27.3825 34.6664 28.1998Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p>+380 (82) 381 8364</p>
            </div>
            <div className="email">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M6.66683 6.66699H33.3335C35.1668 6.66699 36.6668 8.16699 36.6668 10.0003V30.0003C36.6668 31.8337 35.1668 33.3337 33.3335 33.3337H6.66683C4.8335 33.3337 3.3335 31.8337 3.3335 30.0003V10.0003C3.3335 8.16699 4.8335 6.66699 6.66683 6.66699Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M36.6668 10L20.0002 21.6667L3.3335 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>emailemail@email.com</p>
            </div>
              <div className="socials">
                <div className="instagram"><Link target='_blank' to='https://instagram.com/novakivsky.space?igshid=YmMyMTA2M2Y='><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M28.3335 3.33301H11.6668C7.06446 3.33301 3.3335 7.06397 3.3335 11.6663V28.333C3.3335 32.9354 7.06446 36.6663 11.6668 36.6663H28.3335C32.9359 36.6663 36.6668 32.9354 36.6668 28.333V11.6663C36.6668 7.06397 32.9359 3.33301 28.3335 3.33301Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M26.6665 18.9495C26.8722 20.3366 26.6353 21.7532 25.9894 22.9979C25.3436 24.2425 24.3217 25.2519 23.0692 25.8823C21.8167 26.5128 20.3972 26.7322 19.0128 26.5094C17.6284 26.2866 16.3494 25.633 15.3579 24.6415C14.3664 23.6499 13.7127 22.371 13.4899 20.9865C13.2672 19.6021 13.4866 18.1827 14.117 16.9301C14.7475 15.6776 15.7568 14.6558 17.0015 14.0099C18.2461 13.3641 19.6628 13.1272 21.0498 13.3329C22.4647 13.5427 23.7746 14.202 24.786 15.2134C25.7974 16.2248 26.4567 17.5347 26.6665 18.9495Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M29.1665 10.833H29.1832" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></Link></div>
                <div className="facebook"><Link  target='_blank' to='https://www.facebook.com/groups/567027587696944/?ref=share'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M29.9998 3.33301H24.9998C22.7897 3.33301 20.6701 4.21098 19.1073 5.77378C17.5445 7.33659 16.6665 9.4562 16.6665 11.6663V16.6663H11.6665V23.333H16.6665V36.6663H23.3332V23.333H28.3332L29.9998 16.6663H23.3332V11.6663C23.3332 11.2243 23.5088 10.8004 23.8213 10.4878C24.1339 10.1753 24.5578 9.99967 24.9998 9.99967H29.9998V3.33301Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></Link></div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer