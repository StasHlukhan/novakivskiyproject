import './Home.css'
import carousel1 from '../../img/carousel_img/carousel1.png'
import carousel2 from '../../img/carousel_img/carousel2.png'
import carousel3 from '../../img/carousel_img/carousel3.png'
import carousel4 from '../../img/carousel_img/carousel4.png'
import carousel5 from '../../img/carousel_img/carousel5.png'
import carousel6 from '../../img/carousel_img/carousel6.png'
import carousel7 from '../../img/carousel_img/carousel7.png'
import MyButton from '../UI/MyButton/MyButton';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { useEffect } from 'react'



const images = [
  carousel7,
  carousel2,
  carousel3,
  carousel1,
  carousel5,
  carousel6,
  carousel4
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const nextSlide = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        return nextIndex;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="carousel-slider_background" style={{ backgroundImage: `url(${images[activeIndex]})` }}>
      <div className='hero'>
         <h2>Арт-галерея Новаківського</h2>
         <p className='hero_info'>Талановитим і темпераментним експонентом краківського постімпресіонізму був уродженець зазбручанського Поділля Олекса Новаківський. Учень Яна Матейка, Унежицького й Леона Вичулковського, він дуже багато завдячував Мальчевському. </p>
        <div className="hero_buttons">
          <MyButton> <Link to='/donate'>Донат</Link> </MyButton>
           <MyButton><Link to='/art_gallery'>Арт галерея</Link> </MyButton>
         </div>
       </div>
        <div className="carousel-slider_controls">
          <div className="carousel-slider_buttons">
             <button className="carousel-slider__prev" onClick={prevSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="62" viewBox="0 0 36 62" fill="none">
                <path d="M31.2461 57.5005L4.74609 31.0005L31.2461 4.50049" stroke="#878787" strokeWidth="8.70038" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button> 
            <button className="carousel-slider__next" onClick={nextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="62" viewBox="0 0 36 62" fill="none">
                <path d="M4.75098 57.5005L31.251 31.0005L4.75098 4.50049" stroke="#878787" strokeWidth="8.70038" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

         <div className="carousel-slider__indicators">
            {images.map((_, index) => (
              <div
                key={index}
                className={`carousel-slider__indicator ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
      </div>
      </div>
    
  );
};

export default Home;
          


{/* // function Home() {
//   return (
//     <div >
//       <div className='hero'>
//         <h2>Арт-галерея Новаківського</h2>
//         <p className='hero_info'>Талановитим і темпераментним експонентом краківського постімпресіонізму був уродженець зазбручанського Поділля Олекса Новаківський. Учень Яна Матейка, Унежицького й Леона Вичулковського, він дуже багато завдячував Мальчевському. </p>
//         <div className="hero_buttons">
//           <MyButton> <Link to='/donate'>Донат</Link> </MyButton>
//           <MyButton><Link to='/art_gallery'>Арт галерея</Link> </MyButton>
//         </div>
//       </div>
//     <Carousel  fade>
//       <Carousel.Item >
//         <img className="d-block w-100"src={carousel1}alt="First slide"/>
//         <Carousel.Caption>
//           <div className="caption_full">
//             <div className="caption_line"></div>
//             <p>Автопортрет із музою, початок 1900-х років Полотно, олія.</p>
//           </div>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img className="d-block  w-100"src={carousel2}alt="Second slide"
//         />
//         <Carousel.Caption>
//           <div className="caption_full">
//             <div className="caption_line"></div>
//             <p>Пробудження на тлі розп’яття, 1914 рік. Фанера, олія. </p>
//           </div>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img className="d-block  w-100"src={carousel3}alt="Third slide"/>
//         <Carousel.Caption>
//           <div className="caption_full">
//             <div className="caption_line"></div>
//             <p>Юр. Поема світової війни. 1916 – 1922 рр. Полотно на фанері, олія.</p>
//           </div>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img className="d-block  w-100"src={carousel4}alt="Third slide"/>
//         <Carousel.Caption>
//           <div className="caption_full">
//             <div className="caption_line"></div>
//             <p>Моя музаㅤㅤㅤㅤㅤ (Портрет дружини)</p>
//           </div>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img className="d-block  w-100" src={carousel7} alt="Third slide"/>
//         <Carousel.Caption>
//           <div className="caption_full">
//             <div className="caption_line"></div>
//             <p>Автопортрет із музою, початок 1900-х років Полотно, олія.</p>
//           </div>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img className="d-block  w-100"src={carousel6}alt="Third slide"
//         />
//         <Carousel.Caption>
//           <div className="caption_full">
//             <div className="caption_line"></div>
//             <p>Автопортрет із музою, початок 1900-х років. Полотно, олія.</p>
//           </div>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img className="d-block  w-100" src={carousel5} alt="Third slide"/>
//       </Carousel.Item>
//     </Carousel>

//     </div>
    
//   );
// }

// export default Home; */}