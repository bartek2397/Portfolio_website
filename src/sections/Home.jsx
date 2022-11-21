import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro';
import {Spin as Hamburger} from 'hamburger-react';



const Home = () => {

  const [isOpen, setOpen] = useState(false)

  
  

  return (
    
    <div id='home' className='bg-[#40434E] h-screen'>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg className='block relative ' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path className='fill-[#C9C5CB]' d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
      </div>
      <div className={`hidden bg-transparent m-0 text-[#40434E] lg:block lg:fixed lg:z-10 ${isOpen ? 'absolute z-5' : ''}`}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
          <Navbar isOpen={isOpen}/>
          <Intro />
    </div>
    
  )
}

export default Home