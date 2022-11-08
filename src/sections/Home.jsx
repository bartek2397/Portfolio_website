import React, { useState, forwardRef } from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro';
import {Spin as Hamburger} from 'hamburger-react';



const Home = forwardRef(( scrollToSection, ref ) => {

  const [isOpen, setOpen] = useState(false)

  
  

  return (
    <div id='home-page' className='h-[100vh]'>
      <div className={`hidden bg-transparent m-auto text-white lg:block lg:fixed lg:z-10 ${isOpen ? 'absolute z-5' : ''}`}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
          <Navbar ref={ref} scrollToSection={scrollToSection} isOpen={isOpen}/>
          <Intro />
    </div>
  )
})

export default Home