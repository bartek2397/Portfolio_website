import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro';
import {Spin as Hamburger} from 'hamburger-react';



const Home = () => {

  const [isOpen, setOpen] = useState(false)

  
  

  return (
    
    <div id='home' className='h-[100vh]'>
      <div className={`hidden bg-transparent m-auto text-white lg:block lg:fixed lg:z-10 ${isOpen ? 'absolute z-5' : ''}`}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
          <Navbar isOpen={isOpen}/>
          <Intro />
    </div>
    
  )
}

export default Home