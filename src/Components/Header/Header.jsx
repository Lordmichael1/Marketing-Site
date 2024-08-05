import React from 'react'
import "./Header.css"
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

  return (
    <>
        <div className='Header'>
            <div className='logo'></div>
            <div className='Navs'>
                <nav>
                    <ul>
                       <NavLink to="/" style={({isActive})=> isActive ? {color: "blue"}:{color: "black"}}>Home</NavLink>
                       <NavLink to="/about" style={({isActive})=> isActive ? {color: "blue"}:{color: "black"}}>About Us</NavLink>
                       <NavLink to="/solution?" style={({isActive})=> isActive ? {color: "blue"}:{color: "black"}}>Solutions</NavLink>
                      <NavLink to="/our_service" className='services' style={({isActive})=> isActive ? {color: "blue"}:{color: "black"}}>Our services</NavLink>
                    </ul>
                
                </nav>
            </div>
        </div>
    </>
   
  )
}

export default Header
