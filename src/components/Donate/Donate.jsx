import React from 'react'
import './Donate.css'
import NavBar from '../NavBar/NavBar'
import MyButton from '../UI/MyButton/MyButton'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const Donate = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <div>
        
        <div className="donate_page">
            <div className="donate_info">
                <h2 className='donate_title'>Ви можете допомогти розвитку проекта</h2>
                <p className='donate_text'>Проект про життя і творчість Олекси Новаківського та спільноту українців, яка в час кризи століть будувала Україну, яку ми знаємо сьогодні. Яскраві і амбіційні особистості, що мислили масштабами світу, лідерські рішення яких в сфері культури і суспільства варті сучасної розпаковки. Їх історії викликів та рішень, як і символізм картин художника, дадуть сучасним українцям та лідерам змін цікаві сенси, оптику історії культури для розуміння свого сьогодення.</p>
                <p className='donate_text'>Це медійний проект для українців, які цікавляться своїм минулим і є в пошуку ідентичності та в роботі з викликом феномену самозванства. Несподівано в процесі його підготовки зрозуміла, що він також є цінним для лідерів змін, бо дає краще розуміння сценаріїв і рішень столітньої давності, які можна модернізувати і застосувати до нашої пост-ковідної кризи.</p>
                <MyButton style={{marginTop:50,marginLeft:0}}><Link target="_blank"  to='https://www.biggggidea.com/project/nemuzejni-istori-oleksi-novakivskogo/' className='rekviz'>Реквізити</Link> </MyButton>
            </div>
        </div>
    </div>
  )
}

export default Donate