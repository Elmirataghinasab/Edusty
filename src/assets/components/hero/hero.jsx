import React from 'react'
import './hero.css'
import dark_arrow from '../../dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>title</h1>
        <p>description </p>
        <button className='btn'>explore more <img src={dark_arrow} /></button>
      </div>
    </div>
  )
}

export default Hero
