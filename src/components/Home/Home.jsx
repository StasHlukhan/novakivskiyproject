import Carousel from 'react-bootstrap/Carousel';

import React from 'react';
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

function Home() {
  return (
    <div >
      <div className='hero'>
        <h2>Арт-галерея Новаківського</h2>
        <p className='hero_info'>Талановитим і темпераментним експонентом краківського постімпресіонізму був уродженець зазбручанського Поділля Олекса Новаківський. Учень Яна Матейка, Унежицького й Леона Вичулковського, він дуже багато завдячував Мальчевському. </p>
        <div className="hero_buttons">
          <MyButton> <Link to='/donate'>Донат</Link> </MyButton>
          <MyButton><Link to='/art_gallery'>Арт галерея</Link> </MyButton>
        </div>
      </div>
    <Carousel  fade>
      <Carousel.Item >
        <img className="d-block w-100"src={carousel1}alt="First slide"/>
        <Carousel.Caption>
          <div className="caption_full">
            <div className="caption_line"></div>
            <p>Автопортрет із музою, початок 1900-х років Полотно, олія.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  w-100"src={carousel2}alt="Second slide"
        />
        <Carousel.Caption>
          <div className="caption_full">
            <div className="caption_line"></div>
            <p>Пробудження на тлі розп’яття, 1914 рік. Фанера, олія. </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  w-100"src={carousel3}alt="Third slide"/>
        <Carousel.Caption>
          <div className="caption_full">
            <div className="caption_line"></div>
            <p>Юр. Поема світової війни. 1916 – 1922 рр. Полотно на фанері, олія.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  w-100"src={carousel4}alt="Third slide"/>
        <Carousel.Caption>
          <div className="caption_full">
            <div className="caption_line"></div>
            <p>Моя музаㅤㅤㅤㅤㅤ (Портрет дружини)</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  w-100" src={carousel7} alt="Third slide"/>
        <Carousel.Caption>
          <div className="caption_full">
            <div className="caption_line"></div>
            <p>Автопортрет із музою, початок 1900-х років Полотно, олія.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  w-100"src={carousel6}alt="Third slide"
        />
        <Carousel.Caption>
          <div className="caption_full">
            <div className="caption_line"></div>
            <p>Автопортрет із музою, початок 1900-х років. Полотно, олія.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  w-100" src={carousel5} alt="Third slide"/>
      </Carousel.Item>
    </Carousel>

    </div>
    
  );
}

export default Home;