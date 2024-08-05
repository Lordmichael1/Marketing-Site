import React, { useState, useEffect } from "react";
import "./Carousel.css"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    <img src="../../../public/Property\ 1=Variant2.png" alt="" />,
    <img src="../../../public/Property\ 1=Variant3.png" alt="" />,
    <img src="../../../public/frame.png" alt="" />
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex, images.length]);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={Slide` ${currentIndex}`} className="carousel-image" />
    </div>
  );
};

export default Carousel;