import React, { useState,useEffect } from 'react'
import './navbar.css'
import logo from './../../../assets/logo.png'

const Navbar = () => {
  const [sticky,setSticky]= useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >300 ? setSticky(true):setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${ sticky ? "dark-nav" :''}`}>
      <img src={logo} className='logo' />
      <ul>
        <li>home</li>
        <li>program</li>
        <li>abt us</li>
        <li>campus</li>
        <li>testimonials</li>
        <li><button className='btn'>contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
