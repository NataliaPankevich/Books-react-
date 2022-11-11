import "./Slider.css";
import React, { useEffect, useState} from "react";


export const Slider = () => {

  const img = [
    <img key="./img/slider-pictures/slide1.jpg" src="./img/slider-pictures/slide1.jpg" />,
    <img key="./img/slider-pictures/slide2.jpg" src="./img/slider-pictures/slide2.jpg" />,
    <img key="./img/slider-pictures/slide3.jpg" src="./img/slider-pictures/slide3.jpg" />,
    <img key="./img/slider-pictures/slide4.jpg" src="./img/slider-pictures/slide4.jpg" />,
    <img key="./img/slider-pictures/slide5.jpg" src="./img/slider-pictures/slide5.jpg" />,
  ];

  // Индекс текущего слайда
  const [activeIndex, setActiveIndex] = useState(0);

  // Хук Effect
  useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => {
      // Меняем состояние
      setActiveIndex((current) => {
        // Вычисляем индекс следующего слайда, который должен вывестись
        const res = current === img.length - 1 ? 0 : current + 1;
        // Возвращаем индекс
        return res;
      });
    }, 7000);
    // Выключаем интервал
    return () => clearInterval(interval);
  }, []);

  // Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  // Вычисляем индекс следующего слайда
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;
  return (
    <div className="slider">
      <div className="slider-img slider-img-prev" key={prevImgIndex}>
        {img[prevImgIndex]}
      </div>
      <div className="slider-img" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider-img slider-img-next" key={nextImgIndex}>
        {img[nextImgIndex]}
      </div>
    </div>
  );
};
