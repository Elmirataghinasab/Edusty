import React from 'react'
import Navbar from './assets/components/navBar/navbar.jsx'
import Hero from './assets/components/hero/hero.jsx'
import Programs from './assets/components/programs/programs.jsx'
import Title from './assets/components/title/title.jsx'
import Abt from './assets/components/about/abt.jsx'
import Campus from './assets/components/campus/campus.jsx'
import Testimonials from './assets/components/testimonials/testimonials.jsx'
import Contactus from './assets/components/contactus/contactus.jsx'

const App=()=>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='TEXT' title='pragraph'/>
      <Programs/>
      <Abt/>
      <Title subTitle='TEXT' title='pragraph'/>
      <Campus/>
      <Title subTitle='TEXT' title='pragraph'/>
      <Testimonials/>
      <Title subTitle='TEXT' title='pragraph'/>
      <Contactus/>
      </div>
    </div>
  )
}

export default App