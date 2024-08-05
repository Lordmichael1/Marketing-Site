import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='foot'>
      <div className="foot_up">
        <div className="up_up">
          <div className="up_boy"></div>
          <div className="up_boy2">
          Our Services
          </div>
        </div>
        <div className="left_foot">
          <p>We are a full-service Digital Marketing Agency.
          We work with brands that are looking forward 
          to grow and need to modify awareness, engage 
          with prospects and generate leads to fuel that 
          growth.</p>
          <p>Convert your business with professional marketing, analyzed and implemented by experts with deep 
          market experience.</p>
        </div>
        <div className="right_foot">
          <p>Content Marketing</p>
          <p>Digital Marketing</p>
          <p>Social Media Marketing</p>
          <p>Brand Marketing</p>
          <p>Professional Media 
          Marketing</p>
        </div>
      </div>
      <div className="foot_down">
        <div className="social"></div>
        <h4>COPYRIGHT © 2023 VENUX DIGITAL. ALL RIGHTS RESERVED</h4>
      </div>
    </div>
   
  )
}

export default Footer
