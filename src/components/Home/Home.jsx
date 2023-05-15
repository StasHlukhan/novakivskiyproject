import './Home.css';
import carousel1 from '../../img/carousel_img/carousel1.png';
import carousel2 from '../../img/carousel_img/carousel2.png';
import carousel3 from '../../img/carousel_img/carousel3.png';
import carousel4 from '../../img/carousel_img/carousel4.png';
import carousel5 from '../../img/carousel_img/carousel5.png';
import carousel6 from '../../img/carousel_img/carousel6.png';
import carousel7 from '../../img/carousel_img/carousel7.png';
import MyButton from '../UI/MyButton/MyButton';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'

const images = [carousel7, carousel2, carousel3, carousel1, carousel5, carousel6, carousel4];

const Home = () => {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        return nextIndex;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const nextSlide = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div>
      <div
        className="carousel-slider_background"
        style={{ backgroundImage: `url(${images[activeIndex]})` }}
      >
        <div className="hero">
          <h2>{t("art_gallery_novakiv")}</h2>
          <p className="hero_info">
          {t("novakiv_info")}
          </p>
          <div className="hero_buttons">
            <MyButton>
              {' '}
              <Link to="/donate">{t("donate")}</Link>{' '}
            </MyButton>
            <MyButton>
              <Link to="/art_gallery">{t("art_gallery")}</Link>{' '}
            </MyButton>
          </div>
        </div>
        <div className="carousel-slider_controls">
          <div className="carousel-slider_buttons">
            <button className="carousel-slider__prev" onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="62"
                viewBox="0 0 36 62"
                fill="none"
              >
                <path
                  d="M31.2461 57.5005L4.74609 31.0005L31.2461 4.50049"
                  stroke="#878787"
                  strokeWidth="8.70038"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="carousel-slider__next" onClick={nextSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="62"
                viewBox="0 0 36 62"
                fill="none"
              >
                <path
                  d="M4.75098 57.5005L31.251 31.0005L4.75098 4.50049"
                  stroke="#878787"
                  strokeWidth="8.70038"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="carousel-slider__indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`carousel-slider__indicator ${activeIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
