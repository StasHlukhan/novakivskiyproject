import React, { useEffect } from 'react'
import small_kitaec from '../../img/small_kitaec.png'
import MorePosts from '../MorePosts/MorePosts'
import './Article.css'
function Article2() {
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (

    <div>
        <header style={{height:80,background:'blue'}}></header>
        <div className="Article2">
            <div className="facts7_main">

          <div className="facts7_title">
            <h2>Що спільного між знаменитою японською студією Гіблі та Мистецькою Школою Олекси Новаківського?</h2>
          </div>
          <div className="facts7_info">
            <div className="time">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M14.2842 13.9487C14.8081 14.1233 15.3744 13.8402 15.5491 13.3162C15.7237 12.7923 15.4406 12.226 14.9166 12.0513L14.2842 13.9487ZM11.0004 11.8H10.0004C10.0004 12.2304 10.2758 12.6126 10.6842 12.7487L11.0004 11.8ZM12.0004 6.78226C12.0004 6.22997 11.5527 5.78226 11.0004 5.78226C10.4481 5.78226 10.0004 6.22997 10.0004 6.78226H12.0004ZM14.9166 12.0513L11.3166 10.8513L10.6842 12.7487L14.2842 13.9487L14.9166 12.0513ZM12.0004 11.8V6.78226H10.0004V11.8H12.0004ZM19.6004 10.6C19.6004 15.3496 15.75 19.2 11.0004 19.2V21.2C16.8546 21.2 21.6004 16.4542 21.6004 10.6H19.6004ZM11.0004 19.2C6.25074 19.2 2.40039 15.3496 2.40039 10.6H0.400391C0.400391 16.4542 5.14617 21.2 11.0004 21.2V19.2ZM2.40039 10.6C2.40039 5.85035 6.25074 2 11.0004 2V0C5.14617 0 0.400391 4.74578 0.400391 10.6H2.40039ZM11.0004 2C15.75 2 19.6004 5.85035 19.6004 10.6H21.6004C21.6004 4.74578 16.8546 0 11.0004 0V2Z" fill="white"/>
              </svg>
              <p>4 хв</p>
            </div>
            <div className="calendar">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                <path d="M2.875 7.46875H18.625M4.91071 1V2.68771M16.375 1V2.6875M16.375 2.6875H5.125C3.26104 2.6875 1.75 4.19854 1.75 6.0625V17.3126C1.75 19.1766 3.26104 20.6876 5.125 20.6876H16.375C18.239 20.6876 19.75 19.1766 19.75 17.3126L19.75 6.0625C19.75 4.19854 18.239 2.6875 16.375 2.6875ZM5.6875 11.4063H15.8125M5.6875 15.9063H15.8125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>25.01.2023</p>
            </div>
            <div className="links">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M8.4976 12.451C8.4976 10.2961 10.2435 8.54872 12.3978 8.54872C14.5521 8.54872 16.2989 10.2961 16.2989 12.451C16.2989 14.6059 14.5521 16.3533 12.3978 16.3533C10.2435 16.3533 8.4976 14.6059 8.4976 12.451ZM6.38871 12.451C6.38871 15.7708 9.07898 18.4618 12.3978 18.4618C15.7166 18.4618 18.4069 15.7708 18.4069 12.451C18.4069 9.1312 15.7166 6.44016 12.3978 6.44016C9.07898 6.44016 6.38871 9.1312 6.38871 12.451ZM17.2405 6.20183C17.2404 6.47966 17.3226 6.75127 17.4768 6.98234C17.631 7.2134 17.8503 7.39353 18.1069 7.49996C18.3634 7.60638 18.6458 7.63431 18.9182 7.58022C19.1906 7.52612 19.4409 7.39244 19.6374 7.19607C19.8338 6.99969 19.9677 6.74945 20.022 6.47699C20.0763 6.20452 20.0486 5.92207 19.9424 5.66536C19.8362 5.40864 19.6563 5.18918 19.4254 5.03474C19.1946 4.88029 18.9231 4.7978 18.6453 4.79769H18.6448C18.2725 4.79786 17.9155 4.94584 17.6522 5.20911C17.3889 5.47238 17.2408 5.82943 17.2405 6.20183ZM7.67 21.9793C6.52905 21.9273 5.90891 21.7372 5.4968 21.5766C4.95043 21.3638 4.5606 21.1104 4.15073 20.701C3.74086 20.2916 3.48715 19.902 3.27538 19.3555C3.11473 18.9434 2.92468 18.3229 2.87282 17.1817C2.81608 15.9478 2.80476 15.5771 2.80476 12.4511C2.80476 9.32505 2.81702 8.95543 2.87282 7.7205C2.92478 6.57923 3.11623 5.95994 3.27538 5.54668C3.48809 5.00015 3.74142 4.61021 4.15073 4.20022C4.56004 3.79024 4.9495 3.53645 5.4968 3.32462C5.90872 3.16392 6.52905 2.97382 7.67 2.92194C8.90353 2.86519 9.27408 2.85386 12.3978 2.85386C15.5215 2.85386 15.8924 2.86613 17.127 2.92194C18.268 2.97391 18.8871 3.16542 19.3002 3.32462C19.8466 3.53645 20.2364 3.7908 20.6463 4.20022C21.0561 4.60965 21.3089 5.00015 21.5216 5.54668C21.6823 5.95872 21.8723 6.57923 21.9242 7.7205C21.9809 8.95543 21.9923 9.32505 21.9923 12.4511C21.9923 15.5771 21.9809 15.9467 21.9242 17.1817C21.8722 18.3229 21.6812 18.9432 21.5216 19.3555C21.3089 19.902 21.0556 20.292 20.6463 20.701C20.237 21.1101 19.8466 21.3638 19.3002 21.5766C18.8883 21.7373 18.268 21.9274 17.127 21.9793C15.8935 22.036 15.5229 22.0474 12.3978 22.0474C9.27268 22.0474 8.90316 22.036 7.67 21.9793ZM7.5731 0.816008C6.3273 0.872758 5.47601 1.07035 4.73258 1.35972C3.96265 1.65855 3.31087 2.05945 2.65955 2.70992C2.00824 3.3604 1.60848 4.0134 1.30974 4.78355C1.02045 5.52767 0.822916 6.37873 0.766183 7.62489C0.708513 8.87302 0.695312 9.27205 0.695312 12.451C0.695312 15.6299 0.708513 16.029 0.766183 17.2771C0.822916 18.5233 1.02045 19.3743 1.30974 20.1184C1.60848 20.8881 2.00833 21.5419 2.65955 22.192C3.31077 22.8422 3.96265 23.2426 4.73258 23.5423C5.47742 23.8316 6.3273 24.0292 7.5731 24.086C8.82152 24.1427 9.21978 24.1569 12.3978 24.1569C15.5758 24.1569 15.9747 24.1437 17.2225 24.086C18.4684 24.0292 19.3191 23.8316 20.063 23.5423C20.8325 23.2426 21.4847 22.8425 22.1361 22.192C22.7874 21.5416 23.1863 20.8881 23.4859 20.1184C23.7752 19.3743 23.9736 18.5232 24.0294 17.2771C24.0862 16.028 24.0994 15.6299 24.0994 12.451C24.0994 9.27205 24.0862 8.87302 24.0294 7.62489C23.9727 6.37864 23.7752 5.5272 23.4859 4.78355C23.1863 4.01386 22.7863 3.36143 22.1361 2.70992C21.4858 2.05842 20.8325 1.65855 20.064 1.35972C19.3191 1.07035 18.4683 0.871822 17.2234 0.816008C15.9757 0.759258 15.5768 0.745117 12.3987 0.745117C9.22072 0.745117 8.82152 0.758321 7.5731 0.816008Z" fill="white"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="25" viewBox="0 0 13 25" fill="none">
                <path d="M12.0614 13.9134L12.728 9.67837H8.62203V6.9256C8.62203 5.76759 9.19526 4.63604 11.0283 4.63604H12.9213V1.02966C11.8189 0.853866 10.705 0.758762 9.58853 0.745117C6.20912 0.745117 4.00284 2.7766 4.00284 6.44916V9.67837H0.256836V13.9134H4.00284V24.1569H8.62203V13.9134H12.0614Z" fill="white"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                <path d="M23.9196 2.98491C23.1472 3.31763 22.3351 3.54932 21.5035 3.67426C21.8923 3.60754 22.4644 2.90708 22.6921 2.62356C23.0381 2.19589 23.3017 1.70767 23.4697 1.18371C23.4697 1.14479 23.5086 1.0892 23.4697 1.0614C23.4501 1.0507 23.4282 1.04509 23.4058 1.04509C23.3835 1.04509 23.3616 1.0507 23.342 1.0614C22.4389 1.55085 21.4779 1.92442 20.4815 2.17326C20.4468 2.18387 20.4098 2.18483 20.3746 2.17601C20.3394 2.1672 20.3072 2.14895 20.2815 2.12322C20.204 2.03079 20.1205 1.94351 20.0316 1.86194C19.6252 1.4975 19.1641 1.19922 18.6652 0.978016C17.9918 0.701486 17.2644 0.581727 16.5379 0.627783C15.833 0.672339 15.1449 0.86157 14.5162 1.18371C13.8971 1.52334 13.3529 1.98473 12.9165 2.54017C12.4574 3.11185 12.126 3.77531 11.9445 4.48591C11.7948 5.16183 11.7779 5.86042 11.8945 6.54283C11.8945 6.65958 11.8945 6.67625 11.7945 6.65958C7.83431 6.07585 4.58504 4.66936 1.93007 1.65069C1.81343 1.51726 1.75233 1.51726 1.65791 1.65069C0.502613 3.40741 1.0636 6.18704 2.50772 7.56017C2.70212 7.74363 2.90208 7.92153 3.11314 8.0883C2.45102 8.04126 1.80507 7.86167 1.21357 7.56017C1.10248 7.4879 1.04138 7.52682 1.03583 7.66024C1.02008 7.84521 1.02008 8.03119 1.03583 8.21617C1.15172 9.10264 1.50077 9.94241 2.04727 10.6496C2.59377 11.3568 3.31812 11.906 4.14625 12.2411C4.34812 12.3276 4.55848 12.3928 4.77388 12.4356C4.16092 12.5564 3.53225 12.5752 2.91319 12.4912C2.77988 12.4634 2.72989 12.5357 2.77988 12.6636C3.59637 14.8873 5.3682 15.5655 6.66791 15.9435C6.84564 15.9713 7.02338 15.9713 7.22334 16.0158C7.22334 16.0158 7.22334 16.0158 7.19001 16.0492C6.80676 16.7496 5.25711 17.2222 4.54616 17.4668C3.24849 17.9333 1.86493 18.1116 0.491504 17.9893C0.274886 17.956 0.224897 17.9615 0.169354 17.9893C0.11381 18.0171 0.169354 18.0783 0.230451 18.1339C0.508167 18.3173 0.785883 18.4786 1.07471 18.6342C1.93454 19.1036 2.84356 19.4765 3.78521 19.7461C8.66191 21.0914 14.1496 20.1019 17.8099 16.4605C20.687 13.6031 21.6979 9.66157 21.6979 5.7145C21.6979 5.5644 21.8812 5.47545 21.9867 5.39762C22.7146 4.82996 23.3563 4.15957 23.8918 3.40741C23.9846 3.29529 24.0321 3.15254 24.0252 3.00714C24.0252 2.92376 24.0252 2.94043 23.9196 2.98491Z" fill="white"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
                <path d="M2.2334 8.56215C2.2334 8.56215 11.751 4.55349 15.0519 3.14194C16.3173 2.57736 20.6085 0.770574 20.6085 0.770574C20.6085 0.770574 22.589 -0.0198286 22.424 1.8998C22.3689 2.69028 21.9288 5.4568 21.4887 8.44924C20.8285 12.6838 20.1133 17.3135 20.1133 17.3135C20.1133 17.3135 20.0033 18.6122 19.068 18.838C18.1328 19.0638 16.5923 18.0476 16.3173 17.8217C16.0972 17.6524 12.1911 15.1116 10.7607 13.8695C10.3756 13.5307 9.93552 12.8532 10.8157 12.0627C12.7963 10.1995 15.1619 7.88466 16.5923 6.4167C17.2525 5.73913 17.9127 4.15825 15.1619 6.07787C11.2559 8.84448 7.40482 11.4417 7.40482 11.4417C7.40482 11.4417 6.52456 12.0062 4.87412 11.4981C3.22361 10.99 1.29808 10.3124 1.29808 10.3124C1.29808 10.3124 -0.0222073 9.46555 2.2334 8.56215Z" fill="white"/>
              </svg>
            </div>
            </div>
        </div>
      </div>
      <div className="article_info">
        <p className='article_text'>Краківська Академія мистецтв, де вчився Олекса Новаківський, була на той час однією з трендових європейських шкіл. І на час його навчання там відбулась вражаюча оновлююча трансформація у мистецьких підходах, віддзеркалюючи зміни в європейському мистецтві того часу. Отож, при переїзді у 1913 році до культурно більш провінційного Львова , Олекса привіз з собою новомодні фішки. Серед них виїзд на пленер. Якщо пригадаєте історії хоча б Ван Гога чи Моне з їх шаленими полюваннями на саме той природній закуточок з саме тим світлом і саме в тому ракурсі, то ви зрозумієте мислівців за прихованою красою Школи Новаківського. Олекса Новаківський відправлявся з учнями на природу, щоб навчити їх бачити приховану красу природи і відтворювати її живу динаміку в своїх творах.</p>
        <p className='article_text'>Цікава практика майстерного малювання нереалістичного через змалювання створеного природою. Фотографічне зображення реалізму до цієї майстерності зовсім не має відношення. Відриваючись від реалізму ми використовуємо нашу уяву, яка може конструювати дивовижні світи базуючись на побаченому насправді. Справжній художник проявляє побачене, а не відфотографоване.Його часті виїзди в Карпати з Школою з виставками створених там робіт, - це була звична практика, що запровадила нову моду. Як на малювання пейзажів "з натури", так і на приймання художників заможнім українцями, що мали свої резиденції та садиби (дачі) в горах. Щорічно, у часі літніх вакацій, учні виїздили на пленери до Космача. Гуцульщина, її міфологія, народні характери, багата обрядовість і мальовничий побут карпатського краю міцно ввійшли і у творчість Олекси Новаківського і його вихованців.</p>
        <div className="img">
            <img src={small_kitaec} alt="" />
        </div>
        <p className='article_text'>Хаяо Міядзаки відправляв своїх учнів з студії, аби вони змальовували справжніх істот та персонажів для використання їх як прототипів для анімешних героїв.</p>
        <p className='article_text'>"Можна ходити по горбах і горах, по горах і по долинах і рисувати та малювати лише тільки самі дерева. Коли б людина могла добре відтворити експресію, що нею розмовляють деякі дерева, створила б епос, якого ще ніхто не писав. Само собою: говоримо про відтворення, а не фотографування". З мемуарів друга Новаківського Івана Голубовського "Розмахом могутніх крил"</p>
        <p className='article_text'>«Анімація - це не коли ти береш олівець і малюєш рівну, рівну лінію. Анімація - це коли ти намагаєшся знайти ту лінію, яка прихована всередині тебе. Якщо, взявши в руки олівець, ти будеш використовувати тільки розум, тільки розум , результат не може бути успішним. Так, на жаль, працюють 90% аніматорів. Але є й ті, кому вдається оживити свою підсвідомість. Серед молоді їх небагато – вона вже занадто занурена у віртуальну реальність». – здається, з цією цитатою Міядзаке Новаківський теж би погодився.Фото Новаківського та його учнів на одному з пленерів</p>
      </div>
      <MorePosts></MorePosts>
    </div>
  )
}

export default Article2