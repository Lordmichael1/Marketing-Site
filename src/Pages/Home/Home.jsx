import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";


const Home = () => {

  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/frame.png",
    "/Property 1=Variant2.png",
    "/Property 1=Variant3.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='mainContainer'>
      <div className='carousel'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={index === currentSlide ? "visible" : "hidden"}
            alt={`Slide ${index + 1}`}
          />
        ))}
        <div className="layout">
          <div className="textb">
            <p>Enhance Your Business With Digital Marketing</p>
          </div>
          <div className="text">
            <p>We pride in helping you execute Digital Marketing 
            solution, drive results and provide value </p>
          </div>
        </div>
      </div>
      <div className='know_us'>
        <div className="the_img"></div>
        <div className="the_text">
          <h1>GET TO KNOW US</h1>
          <p>We are a digital marketing agency based in Lagos, Nigeria. We work with specialized product brands and professional services firms who are looking to grow and need to attract new prospects, engage with customers and generate leads to fuel that growth. VENXUS  Digitals broadens experience.</p>
          <button className='bth' onClick={()=> navigate("/consult_us?")}>Book a consultation</button>
        </div>
      </div>
      <div className='we_help'>
        <h1>How We Help Brands</h1>
        <div className="the_card">
          <div className="th_card">
            <h2>Convert</h2>
            <div className="obj"></div>
            <p>We make our target audience become eligible customers</p>  
          </div>
          <div className="th_card">
            <h2>Awareness</h2>
            <div className="ob"></div>
            <p>We create awareness and ensure visibility</p>  
          </div>
          <div className="th_card">
            <h2>Growth</h2>
            <div className="obt"></div>
            <p>We prioritize your brand, give good rate and business growth</p> 
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
